function createUser() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((user) => {
    console.log("user");
    location.href = '/signin';
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
    console.log(errorMessage);
    console.log(user);
  //  console.log(user.isEmailVerified());
  });
}
