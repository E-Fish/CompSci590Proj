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
       
        let user = posts[i].user; //username
        let title = posts[i].title; //post title
        let body = posts[i].body; //post body
        let date = posts[i].date; //post date
       
        //creates a new review card
        let mycard = document.createElement("div");
        mycard.setAttribute("class", "postCard");
       
        //creates the <h1> tag for the post title
        let h1 = document.createElement("h1");
        h1.innerText = title;
       
        //creates the <p> tag for the post body
        let p = document.createElement("p");
        p.innerText = body;
       
        //creates the <h3> tag for the reviewer name and date
        let h3 = document.createElement("h3");
        h3.innerText = user + " ( " + date + " )";

        mycard.appendChild(h1);
        mycard.appendChild(p);
        mycard.appendChild(h3);
        divTag.appendChild(mycard);
    }
} //End addCourseReviews
