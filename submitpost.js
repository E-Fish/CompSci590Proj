const express = require('express');
const mongoose = require('mongoose');
const app = express();
const ejs = require('ejs');
const bodyParser = require('body-parser');
const { Int32 } = require('mongodb');
app.use(bodyParser.urlencoded({extended: true}));

//app.set('view engine', 'ejs');
mongoose.connect('mongodb+srv://cSc590:ehHsu3NViHPgLvWX@cluster0.ueyan8p.mongodb.net/TEST1');

//const connection = mongoose.connection;

const courseSchema = {
    username: String,
    course_no: String,
    subj: String,
    term: String,
    rating: String,
    teacher: String,
    //comment: String,
}

const course = mongoose.model('ratings_reviews', courseSchema);

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/newpost.html");
});
  
app.post("/", function(req, res) {
    let newCourse = new course ({
        username: req.body.username,
        course_no: req.body.coursecode,
        subj: req.body.term,
        rating: req.body.rating,
        teacher: req.body.teachername,
       //comment: req.body.comments,

   })
   newCourse.save();
});
app.listen(4000, function() {
    console.log('server is running');
})
