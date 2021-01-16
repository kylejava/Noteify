var database = firebase.database();

function createUser() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var display = document.getElementById('displayName').value;
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((user) => {
    firebase.database().ref('users/' + display).set({
      username:display,
      email: email
    });
    location.href = "/signin";
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
    console.log(errorMessage);
  //  console.log(user.isEmailVerified());
  });
}
