
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log(user.email);

  } else {
    location.href = "/signin";
  }
});

function goBackToMainPage(){
  location.href = "/profile";
}
