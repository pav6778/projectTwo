//Edit

$(".delete-button").on("click", function (event) {


    console.log("delete");
    console.log($(this).attr("data"));


    $.ajax({
        method: "DELETE",
        url: "/api/article/"+$(this).attr("data"),
    })
        .then(function () {
            //console.log("sentreqest");
            window.location.href = "/";
        });

});


$(".edit-button").on("click", function (event) {

    console.log("edit");
    console.log($(this).attr("data"));
    

});


$(".edit-button").on("click", function (event) {

    console.log("edit");
    console.log($(this).attr("data"));
    
    window.location.href = "write/" + $(this).attr("data");


});

//Delete