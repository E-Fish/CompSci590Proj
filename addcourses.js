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
       
        //This creates a new course card
        let mycard = document.createElement("div");
        mycard.setAttribute("class", "courseCard");
       
        //This creates the <h1> tag for the course name, e.g. "ANT500"
        let h1 = document.createElement("h1");
        h1.innerText = name;
        
        //This creates the rating stars on the page
        let rating = document.createElement("div");
        rating.classList.add("rating");
        rating.innerHTML = '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>';
       
        //This creates the <p> tag for the course title, e.g. "Cultural Anthropology"
        let p = document.createElement("p");
        p.innerText = title;
       
        //This creates the <h3> tag for the last review date/time and last reviewer
        //We will fill this in AFTER we have created all courses, so for now put in dummy information
        let h3 = document.createElement("h3");
        h3.innerText = "Last review:" + " lionrampant" + cnt.toString() + "  (2023-05-11)";

        mycard.appendChild(h1);
        mycard.appendChild(p);
        mycard.appendChild(h3);
        mycard.appendChild(rating);
       
        mycard.addEventListener("click", function() { clickedOnCourse(index); });
       
        divTag.appendChild(mycard);
       
       cnt++;
    }
   // addLatestReviews();
} //End addcourses
