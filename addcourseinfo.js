function addcourseinfo()
{
    let courseName = localStorage.getItem("courseName");
    let courseTitle = localStorage.getItem("courseTitle");
    let courseDescription = localStorage.getItem("courseDescription");
    let courseRating = localStorage.getItem("courseRating");
   
    let nametitle = document.getElementById("courseNameTitle");
    nametitle.innerText = courseName + " - " + courseTitle;
   
    let description = document.getElementById("courseDescription");
    description.innerText = "Description: " + courseDescription;
   
    let r = parseInt(courseRating);
    let rating = document.getElementById("courseRating");
   
    let starString = "";
    for (let i = 0; i < r; i++) {
        starString += "<i class = 'fa fa-star checked' style='font-size:50px' 'fa-align-left'></i>"
    }
    rating.innerHTML = starString;
}
