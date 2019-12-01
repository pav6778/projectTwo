console.log("isLoaded");


$("#newComment").on("click", function (event) {

    event.preventDefault();
    
    console.log("pressed");

    $.ajax({
        method: "POST",
        url: "/api/comments/" + 12,
        data: {
            comment:$("#comment").val().trim(),
        }
    })
        .then(function () {
            console.log("sentreqest");
            window.location.href = "/";
        });

});

function handleClick(params) {
    console.log("pressed");

}


function handleIt() {
    alert("hello");
  }
