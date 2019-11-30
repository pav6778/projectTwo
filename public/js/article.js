
$("#register").on("click", function(event){

event.preventDefault();

var newUser = {
    userName: $("#userName").val().trim(),
    email: $("#email").val().trim(),
    password: $("#password").val().trim(),
}
console.log(newUser)

$.post("/register", newUser).then(function(data){
    console.log(data)
})
})