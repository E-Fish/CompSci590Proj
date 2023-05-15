/*
When the user clicks on a course, the "class" page loads where the user can read all
the reviews for that class. 
*/
function clickedoncourse(index) {
    let collection = document.getElementsByClassName("courseCard");
   
    if (collection.length == 0) {
        alert("clickedoncourse: error getting course cards");
    }
   
    let name = collection[index].childNodes[0].innerHTML;
   
    //stores the name in the browser storage. When we load the class page, we will look it up.
    localStorage.setItem("className", name);
    localStorage.setItem("classIndex", index);
    //
    //gets the path to this page
    let path = window.location.pathname;
   
    //assumes that this page is called index.html
    let pathNew = path.replace("index.html", "course.html");
   
    //loads the new page in the browser
    window.location.assign(pathNew);
}
