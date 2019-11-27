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

    console.log(body)


    // $(document).ready(function(){
    //     $("#article-button").click(function(event){        
    //         $("#summernote").submit(); 
    //     });
    // });
    // $.post("/register", newUser).then(function(data){
    //     console.log(data)

    // })

    $.ajax({
        method: "POST",
        url: "/api/articles",
        data: { title}
    })
        .then(function () {
            console.log("sentreqest");
            
            window.location.href = "/";
        });
})


