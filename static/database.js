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

    } else {
      console.log("user is note signed in");
    }

  });
}
