/*
When the user clicks on a course, the "class" page loads where the user can read all
the reviews for that class. 
*/
function clickedoncourse(index) {
    let allCards = document.getElementsByClassName("courseCard");
   
    if (allCards.length == 0) {
        alert("clickedoncourse: error getting course cards");
    }
    
    let name = document.getElementById("courseName"+index).innerText;
    let title = document.getElementById("courseTitle"+index).innerText;
    let desc = document.getElementById("courseDescription"+index).innerText;
    let rating = document.getElementById("courseRating"+index).innerText;
   
    //Store these in browser storage. When we load the class page, we will look it up.
    localStorage.setItem("courseIndex", index);
    localStorage.setItem("courseName", name);
    localStorage.setItem("courseTitle", title);
    localStorage.setItem("courseDescription", desc);
    localStorage.setItem("courseRating", rating);
    
    //gets the path to this page
    let path = window.location.pathname;
   
    //assumes that this page is called index.html
    let pathNew = path.replace("index.html", "course.html");
   
    //loads the new page in the browser
    window.location.assign(pathNew);
}
