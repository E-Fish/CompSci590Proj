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
   //Loop through all courses
    for (let i in posts) {
        let index = posts[i].indexCourse; //course index
        if (index != selected) continue;
      }
} //End addCourseReviews
