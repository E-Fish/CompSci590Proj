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
    addcourseinfo();
    let selected = localStorage.getItem("courseIndex");
    console.log("Trying to fetch posts")
    let response = await fetch("https://raw.githubusercontent.com/E-Fish/CompSci590Proj/main/static/posts.json");
    let posts = await response.json();
 
    //Get the divTag
    let divTag = document.getElementById("allreviews");
   
    //What does this do?
    while (divTag.hasChildNodes()) {
        divTag.removeChild(divTag.firstChild);
    }
   
    //Loop through all courses
    for (let i in posts) {
        //Grabs code from only the one course
        let index = posts[i].indexCourse; //course index
        if (index != selected) continue;
        
        //Not using title because that's not an option in post
        let user = posts[i].user; //username
        let term = posts[i].term; //term
        let teacher = posts[i].indexTeacher; //teacher (filler because we need teacher and teacher review elements)
        let body = posts[i].body; //post body
        let rating = posts[i].rating; //rating
        let date = posts[i].date; //post date
       
        //creates a new review card
        let mycard = document.createElement("div");
        mycard.setAttribute("class", "postCard");
       
        //creates the "UserDate" tag that has the user and the date
        let User = document.createElement("div");
        User.setAttribute("class", "user")
        User.innerText = user;

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

        //creates the "Date" tag that has the date
        let Date = document.createElement("div");
        Date.setAttribute("class", "date")
        Date.innerText = "Date posted: " + date;

        //adding rating to postCard using a string "starString"
        let Stars = document.createElement("div");
        let starString = "";
        for (let i = 0; i < rating; i++) {
            starString += "<i class = 'fa fa-star checked' style='font-size:30px'></i>"
        }
        for (let i = rating; i<5; i++) {
            starString += "<i class = 'fa fa-star unchecked' style='font-size:30px'></i>"
        }
        Stars.innerHTML = starString;
        
        mycard.appendChild(Stars);
        mycard.appendChild(User);
        mycard.appendChild(Term);
        mycard.appendChild(Teacher);
        mycard.appendChild(Review);  
        mycard.appendChild(Date);      
        divTag.appendChild(mycard);
    }
} //End addCourseReviews
