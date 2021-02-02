/*
Function Name: SignIn()
Parameters: None
Description: When a user tries to sign in to Noteify, this function will first check if
that user exists. If the user does exist then this function will check if that email is verified.
If the email is not verified it will call the sendVerificationEmail() function.
If the user's email is verified then the user will be allowed into the website.
*/
function signIn(){
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;


  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((user) => {
    if(user['user']['emailVerified'] == false){
      document.getElementById('error').innerHTML = "Email needs verification.";
      firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            user.sendEmailVerification().then(function() {
              // Email sent.
              
            }).catch(function(error) {
              // An error happened.
            });
            console.log(user);
          } else {
            console.log("user is not signed in");
          }
        });
    }
    else{
      //location.href = '/profile';
      console.log("That email is verified");
      location.href = "/profile";
    }

  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
    document.getElementById('error').innerHTML = errorMessage;
  });
}
