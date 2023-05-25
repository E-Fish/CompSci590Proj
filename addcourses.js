async function addcourses()
{
    console.log("Trying to fetch course info");
    let response = await fetch("https://raw.githubusercontent.com/E-Fish/CompSci590Proj/main/static/courses.json");
    //change the link to our mongoDB server when we have it set up
    let courses = await response.json();
 
    //Get the divTag
    let divTag = document.getElementById("allcourses");
   
    //Loop through all courses
    let cnt  = 0;
   
    for (let i in courses) {
        let index = courses[i].indexCourse; //The course index
        let name = courses[i].name; //The class name
        let title = courses[i].title; //The class title
        let description = courses[i].description;

         //lastUser, lastDate, and averageRating should come from database
        let lastUser = "lionrampant" + cnt.toString();
        let lastDate = "2023-05-25";
        let averageRating = 1.0 + Math.random()*4; //generate random number from 1 to 5
        let rating = Math.round(averageRating);
       
        //This creates a new course card
        let mycard = document.createElement("div");
        mycard.setAttribute("class", "courseCard");
       
        //This creates the <h1> tag for the course name, e.g. "ANT500"
        let myname = document.createElement("h1");
        myname.setAttribute("id", "courseName" + index);
        myname.setAttribute("class", "courseNames");
        myname.innerText = name;
       
        //This creates the <p> tag for the course title, e.g. "Cultural Anthropology"
        let mytitle = document.createElement("p");
        mytitle.setAttribute("id", "courseTitle" + index);
        mytitle.setAttribute("class", "courseTitles");
        mytitle.innerText = title;

        //Create a tag for the course description but don't display it
        let mydesc = document.createElement("p");
        mydesc.setAttribute("id", "courseDescription"+index);
        mydesc.innerText = description;
        mydesc.style.display = "none"; //doesn't take up space and not shown
       
        //Create a tag for the average rating but don't display it
        let myrating = document.createElement("p");
        myrating.setAttribute("id", "courseRating"+index);
        myrating.innerText = rating;
        myrating.style.display = "none"; //doesn't take up space and not shown
       
        //This creates the <h3> tag for the last review date/time and last reviewer
        //We will fill this in AFTER we have created all courses, so for now put in dummy information
        let mylast = document.createElement("h3");
        mylast.setAttribute("id", "courseLastReview" + index);
        mylast.setAttribute("class", "courseLastReviews");
        mylast.innerText = "Last review: " + lastUser +  "(" + lastDate + ")";

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
        
        mycard.appendChild(myname);
        mycard.appendChild(mytitle);
        mycard.appendChild(mydesc);
        mycard.appendChild(myrating);
        mycard.appendChild(mylast);
        mycard.appendChild(Stars);
       
        mycard.addEventListener("click", function() { clickedoncourse(index); });
       
        divTag.appendChild(mycard);
       
       cnt++;
    }
   // addLatestReviews();
} //End addcourses
