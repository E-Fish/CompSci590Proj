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
        let rating = posts[i].rating; //rating
       
        //creates a new review card
        let mycard = document.createElement("div");
        mycard.setAttribute("class", "postCard");
       
        //creates the <h1> tag for the User and Date
        let UserDate = document.createElement("div");
        UserDate.setAttribute("class", "user")
        UserDate.innerText = user + " ( " + date + " )";
       
        //creates the <p> tag for the post body
        let Title = document.createElement("div");
        Title.setAttribute("class", "body")
        Title.innerText = title;
    
        //creates the <h3> tag for the reviewer name and date
        let Review = document.createElement("div");
        Review.setAttribute("class", "review")
        Review.innerText = body;

        //adding rating to postCard
        let Rating = document.createElement("ratingb");
        Rating.innerHTML = '<input type="radio" id="star5" name="rating" value="5" /><label for="star5"></label> <input type="radio" id="star4" name="rating" value="4" /><label for="star4"></label> <input type="radio" id="star3" name="rating" value="3" /><label for="star3"></label> <input type="radio" id="star2" name="rating" value="2" /><label for="star2"></label> <input type="radio" id="star1" name="rating" value="1" /><label for="star1"></label>'


        mycard.appendChild(UserDate);
        mycard.appendChild(Title);
        mycard.appendChild(Review);
        mycard.appendChild(Rating);
        divTag.appendChild(mycard);

    }
} //End addCourseReviews
