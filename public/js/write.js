console.log("is loaded")
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

    $.ajax({
        method: "POST",
        url: "/api/articles",
        data: { title:title, body:body}
    })
        .then(function () {
            console.log("sentreqest");
            window.location.href = "/";

        });
})


