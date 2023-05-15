const express = require('express');
const mongoose = require('mongoose');
const app = express();
const ejs = require('ejs');


app.set('view engine', 'ejs');
mongoose.connect('mongodb+srv://cSc590:ehHsu3NViHPgLvWX@cluster0.ueyan8p.mongodb.net/test');

const courseSchema = {
    dept: String,
    subj: String,
    course_no: String
}

const course = mongoose.model('classes', courseSchema);

app.get('/', (req, res) => {
    course.find({}, function(Courses) {
        res.render('index', {

        });
    })

})

app.listen(4000, function() {
    console.log('server is running');
})
