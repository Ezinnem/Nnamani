let myOutput = ('input-box').value;
var notes = document.getElementById('output-box').innerHTML= myOutput;

function myNotes(){
  console.log('Running')
  return notes;
}
myNotes();