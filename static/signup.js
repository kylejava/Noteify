var database = firebase.database();

/*
Function Name: createNewUser()
Parameters: None
Description: The user will input their name, email, and password to sign up for an account at
Noteify. When this function is called another Firebase function will send them an email
for verifying their email.
*/
function createNewUser() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var display = document.getElementById('displayName').value;
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((user) => {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          user.sendEmailVerification().then(function() {
            // Email sent.
            location.href = "/signin";
          }).catch(function(error) {
            // An error happened.
          });
          console.log(user);
        } else {
          console.log("user is not signed in");
        }
      });
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
    console.log(errorMessage);
    document.getElementById('error').innerHTML = errorMessage;
  //  console.log(user.isEmailVerified());
  });
}
