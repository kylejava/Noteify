var database = firebase.database();

function test(){
  console.log("test");
}

function createNewUser() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var display = document.getElementById('displayName').value;
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((user) => {
    firebase.database().ref('users/' + display).set({
      username:display,
      email: email,
      OpenWhenYouFeelLikeYoureNotGoodEnough: [],
    });
    document.getElementById('note').innerHTML = "Account Has Been Created.";
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
    console.log(errorMessage);
  //  console.log(user.isEmailVerified());
  });
}
