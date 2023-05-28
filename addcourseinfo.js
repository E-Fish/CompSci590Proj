function addcourseinfo()
{
    let courseName = localStorage.getItem("courseName");
    let courseTitle = localStorage.getItem("courseTitle");
    let courseDescription = localStorage.getItem("courseDescription");
    let courseRating = localStorage.getItem("courseRating");
   
    let name = document.getElementById("courseName");
    name.innerText = courseName;
   
    let title = document.getElementById("courseTitle");
    title.innerText = courseTitle;
   
    let description = document.getElementById("courseDescription");
    description.innerText = courseDescription;
   
    let r = parseInt(courseRating);
    let rating = document.getElementById("courseRating");
   
    let starString = "";
    for (let i = 0; i < r; i++) {
        starString += "<i class = 'fa fa-star checked' style='font-size:30px'></i>"
    }
    rating.innerHTML = starString;
}

