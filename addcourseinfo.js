/*
Retrieves course information from localStorage and populates the corresponding elements in the HTML with the retrieved data.
Generates star icons based on the course rating and inserts them into the HTML.
*/
function addcourseinfo()
{
    //Retrieves course information
    let courseName = localStorage.getItem("courseName");
    let courseTitle = localStorage.getItem("courseTitle");
    let courseDescription = localStorage.getItem("courseDescription");
    let courseRating = localStorage.getItem("courseRating");
   
    //Sets the course name and title in the element with the ID "courseNameTitle"
    let nametitle = document.getElementById("courseNameTitle");
    nametitle.innerText = courseName + " - " + courseTitle;
   
    //Sets the course description in the element with the ID "courseDescription"
    let description = document.getElementById("courseDescription");
    description.innerText = "Description: " + courseDescription;
   
    //Sets the course rating in the element with the ID "courseRating"
    let rating = document.getElementById("courseRating");
   
    let r = parseInt(courseRating);
    let starString = "";

    for (let i = 0; i < r; i++) {
        //Generates HTML code for displaying star icons based on the course rating
        starString += "<i class = 'fa fa-star checked' style='font-size:50px' 'fa-align-left'></i>"
    }
    rating.innerHTML = starString; //Inserts the generated star icons into the element with the ID "courseRating"
}
