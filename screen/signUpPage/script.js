var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate() {
  var email = document.getElementById("email").value;
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  console.log(email, username, password)
  if (username == "seller" && password == "123") {
    window.location = "../../seller/Homepage.html"; // Redirecting to other page.
    return false;
  }
  if (username == "admin" && password == "123") {
    window.location = "../../admin/Homepage.html"; // Redirecting to other page.
    return false;
  }
  if (email != '' && username != '' && password  != '' ) {
    window.location = "../../user/Homepage.html"; // Redirecting to other page.
    return false;
  } 
  else {
    attempt--; // Decrementing by one.
    alert("You can not sign up!");
  }
}
