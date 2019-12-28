//require the express ap installed
let express = require('express');
let bodyParser = require("body-parser");
let note = ["This is a new note", "This is a second note"];
let complete = ["Finished"];

//then we call express
let app = express();
app.use(bodyParser.urlencoded({ extended: true }));
//set up template engine
app.set('view engine', 'ejs');
app.use(express.static("public"));



//set up the route
app.post("/addNotes", function(req, res){

let newNotes = ["Author: "
  + req.body.newName +" "+ " Note: ", req.body.newNote
];
//add the new Note from the post route into the array of notes
note.push(newNotes);

//then we redirect it to the root route
res.redirect('/');
});
app.get('/', function (req, res) {
  res.render('index', {note: note});
});
//for removing note
app.post('/removeNotes', function(req, res){
  let completeNote = req.body.check;

  if (typeof completeNote === "string") {
    complete.push(completeNote);

  } else if (typeof completeNote === "object") {
    for (var i = 0; i < completeNote; i++) {
      complete.push(completeNote[i]);
      note.splice(note.indexOf (completeNote), 1);
    }
  }
  res.redirect("/");
});

app.listen(3000, function(){
  console.log('Server is running on port 3000...')
});