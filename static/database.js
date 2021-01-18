var database = firebase.database();
function addEntryToJar(){
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      var choice = document.getElementById('jars');
      var userChoice = choice.value;
      console.log(userChoice);

      var test = document.getElementById('note').value;
      var postListRef = firebase.database().ref('/users' + '/' + user.uid + "/"+userChoice);
      var newPostRef = postListRef.push();
      newPostRef.set({
          entry:test
      });
      document.getElementById('note').value = '';
      document.getElementById('confirm').innerHTML = "Note Has Been Added To Jar!"

    } else {
      console.log("user is note signed in");
    }

  });
}

function checkIfUserSignedIn(){
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log(user);
      console.log(user.uid);
      console.log(user.email);
    } else {
      location.href = "/signin";
    }
  });
}
