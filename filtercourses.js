function filtersubject(name)
{
    let input = document.getElementById("coursesearch");
    input.value = name;
    filtercourses(true);
}

function filtercourses(nameOnly = false) 
{
    //Get text from the search bar
    let input = document.getElementById("coursesearch");
    let searchString = input.value.toUpperCase();
    
    //Get the courseCards
    let allCards = document.getElementsByClassName("courseCard");
    let numCards = allCards.length;
    
    let allNames = document.getElementsByClassName("courseNames");
    let allTitles = document.getElementsByClassName("courseTitles");
    let allLastReviews = document.getElementsByClassName("courseLastReviews");
    
     //Check if the number of elements is consistent
    if (allNames.length != numCards || allTitles.length != numCards || allLastReviews.length != numCards) {
        alert("filtercourses: internal error");
        return;
    }
    
    if (searchString.length == 0) {
        //If search string is empty, display all cards
        for (let i=0; i<numCards; i++) {
            allCards[i].style.display = ""; //Display    
        }
    }
    else
    {
        //If search string is not empty, display all cards that include the search string text
        for (let i=0; i<numCards; i++) {
            
            let courseName = allNames[i].innerText.toUpperCase();
            let courseTitle = allTitles[i].innerText.toUpperCase();
            let courseLast = allLastReviews[i].innerText.toUpperCase();
            
            //If nameOnly is true, only search the course name 
            let concatText = (nameOnly) ? courseName : courseName + courseTitle + courseLast;
            
            //If "searchString" appears anywhere within "concatText," then display the row
            if (concatText.includes(searchString)) {
                allCards[i].style.display = ""; //Display
            }
            else {
                allCards[i].style.display = "none"; //Don't display
            }   
        }
    }
} //End filterCourses
