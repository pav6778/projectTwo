console.log("is loaded");

$('#summernote').summernote({
    tabsize: 2,
    height: 200
});

$("#article-button").on("click", function (event) {
    console.log("clicked")
    event.preventDefault();

    var body = $('#summernote').summernote('code');
    var title = $("#article-title").val().trim();

    console.log(title);
    console.log(body);

    console.log($("#rwFlag").attr("data-val").trim());

    if (!$("#rwFlag").attr("data-val").trim()) {
        console.log("create");

        $.ajax({
            method: "POST",
            url: "/api/articles",
            data: {
                title: title,
                body: body,
                author: $("#rwFlag").attr("data-user").trim();
            }
        })
            .then(function () {
                console.log("sentreqest");
                window.location.href = "/";
            });
    } else {

        console.log("update");

        $.ajax({
            method: "PUT",
            url: "/api/articles/" + $("#rwFlag").attr("data-reference").trim(),
            data: {
                title: title,
                body: body,
                author: $("#rwFlag").attr("data-user").trim()
            }
        })
            .then(function () {
                console.log("sentreqest");
                window.location.href = "/";
            });

    }

})

