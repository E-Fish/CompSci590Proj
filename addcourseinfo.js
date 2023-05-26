//EXTREMELY PRELIMIARY JS FILE. NOTHING WORKS.

async function addRating(){
    let response = await fetch("https://raw.githubusercontent.com/E-Fish/CompSci590Proj/main/static/courses.json");

    let averageRating = 1.0 + Math.random()*4; //generate random number from 1 to 5
    let rating = Math.round(averageRating);

    for (let i in courses) { 

        let Stars = document.createElement("div");
        let starString = "";
        for (let i = 0; i < rating; i++) {
            starString += "<i class = 'fa fa-star checked' style='font-size:30px'></i>"
        }
        for (let i = rating; i<5; i++) {
            starString += "<i class = 'fa fa-star unchecked' style='font-size:30px'></i>"
        }
        Stars.innerHTML = starString;

        return Stars;
    }

}

// No subject in courses.json yet
async function addSubject() {
    let response = await fetch("https://raw.githubusercontent.com/E-Fish/CompSci590Proj/main/static/courses.json");

    
    for (let i in courses) {       
        let subject = courses[i].subject;

        //Create a tag for the Subject
        let mysubject = document.createElement("p");
        mysubject.setAttribute("id", "courseSubject"+index);
        mysubject.innerText = subject;

        return mysubject;
    }
}

async function addDescription() {
    let response = await fetch("https://raw.githubusercontent.com/E-Fish/CompSci590Proj/main/static/courses.json");
    
    for (let i in courses) {
        let description = courses[i].description;

        //Create a tag for the course description
        let mydesc = document.createElement("p");
        mydesc.setAttribute("id", "courseDescription"+index);
        mydesc.innerText = description;

        return mydesc;
    }
}

