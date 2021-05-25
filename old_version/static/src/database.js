var database = firebase.database();

//This file is responsible for adding new notes to jars, only use for database functions

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
