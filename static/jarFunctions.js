/*
Function Name: getNewNote()
Parameters: None
Description: When a user requests a new new note this function will take in account
of the previous note that was presented. The function will then get another random
note out of the jar, if the previous note matches the new note then it will find another note.
If there is only one note in the jar it will not try to find any new notes.
*/

function getNewNote(jar){
  var currentNote = document.getElementById('note').innerHTML;
  var database = firebase.database();
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      var notes = [];
      var leadsRef = database.ref('/users' + '/' + user.uid+ '/' + jar);
      leadsRef.on('value', function(snapshot) {
          snapshot.forEach(function(childSnapshot) {
            var childData = childSnapshot.val();
            var note = (childData['entry']);
            notes.push(note);
          });
          var newNote = notes[getRandomInt(notes.length)];
          if(notes.length == 1){
            document.getElementById('note').innerHTML = newNote;
          }
          else{
            while(newNote != currentNote){
              newNote = notes[getRandomInt(notes.length)];
              console.log("New Note: " + newNote);
              console.log("Old Note: " + currentNote);
            }
          }
          var test = newNote;
          document.getElementById('note').innerHTML = test;
          console.log("New Note: " + newNote);
          console.log("Old Note: " + currentNote);
      });
    } else {
      location.href = '/signin';
    }
  });
}
