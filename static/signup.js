function createUser() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var display = document.getElementById('displayName').value;
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((user) => {
    user.updateProfile({
      displayName: display,
    }).then(function() {
      // Update successful.
    }).catch(function(error) {
      // An error happened.
    });
    if (user.displayName != null) {
      location.href ='/signin';
    }
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
