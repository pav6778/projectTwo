console.log("isLoaded");


$("#newComment").on("click", function (event) {

    event.preventDefault();
    

console.log("pressed");


  //  console.log($('form').serializeArray());
    
    $.ajax({
        method: "POST",
        url: "/api/comments/" + 12,
        data: {
            title: title,
            body: body,
            author: author
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
