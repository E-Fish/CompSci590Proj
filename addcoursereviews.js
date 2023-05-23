//Add the reviews for selected course
//
//https://www.w3schools.com/jsref/api_fetch.asp
//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
//
//
//Creating elements with different tag values:
//https://www.w3schools.com/jsref/met_document_createelement.asp
//
async function addcoursereviews()
{
    let selected = localStorage.getItem("classIndex");
    console.log("Trying to fetch posts")
    let response = await fetch("https://raw.githubusercontent.com/E-Fish/CompSci590Proj/main/static/posts.json");
    let posts = await response.json();
 
    //Get the divTag
    let divTag = document.getElementById("allreviews");
   
    while (divTag.hasChildNodes()) {
        divTag.removeChild(divTag.firstChild);
    }
   
    //Loop through all courses
    for (let i in posts) {
        let index = posts[i].indexCourse; //course index
        if (index != selected) continue;
        
        //Not using title because that's not an option in post
        let user = posts[i].user; //username
        let date = posts[i].date; //post date
        let term = posts[i].term; //term
        let teacher = posts[i].indexTeacher; //teacher (filler because we need teacher and teacher review elements)
        let body = posts[i].body; //post body
        let rating = posts[i].rating; //rating
       
        //creates a new review card
        let mycard = document.createElement("div");
        mycard.setAttribute("class", "postCard");
       
        //creates the "UserDate" tag that has the user and the date
        let UserDate = document.createElement("div");
        UserDate.setAttribute("class", "user")
        UserDate.innerText = user + " ( " + date + " )";

        //creates the "Term" tag that has the term taken
        let Term = document.createElement("div");
        Term.setAttribute("class", "termandteacher")
        Term.innerText = "Term Taken: " + term; 
       
        //creates the "Teacher" tag that has the teacher
        let Teacher = document.createElement("div");
        Teacher.setAttribute("class", "termandteacher")
        Teacher.innerText = "Teacher: " + teacher;
    
        //creates the "Review" tag that has the main review
        let Review = document.createElement("div");
        Review.setAttribute("class", "body")
        Review.innerText = body;

        //adding rating to postCard using a string "starString" (Doesn't work for now)
        // let starString = "";

        // for (let i = 0; i < rating; i++) {
        //     starString += "<i class = 'fa fa-star checked'></i>"
        // }

        // for (let i = rating; i<5; i++) {
        //     starString += "<i class = 'fa fa-star unchecked'></i>"
        // }

        mycard.appendChild(UserDate);
        mycard.appendChild(Term);
        mycard.appendChild(Teacher);
        mycard.appendChild(Review);
        // mycard.appendChild(starString);
        divTag.appendChild(mycard);

    }
} //End addCourseReviews
