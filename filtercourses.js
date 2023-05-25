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
    
    //This is for debugging.
    //alert(searchString);
    
    //Get the courseCards
    let allCards = document.getElementsByClassName("courseCard");
    let numCards = allCards.length;
    
    let allNames = document.getElementsByClassName("courseNames");
    let allTitles = document.getElementsByClassName("courseTitles");
    let allLastReviews = document.getElementsByClassName("courseLastReviews");
    
    if (allNames.length != numCards || allTitles.length != numCards || allLastReviews.length != numCards) {
        alert("filtercourses: internal error");
        return;
    }
    
    if (searchString.length == 0) {
        //If our search string is empty display all cards
        for (let i=0; i<numCards; i++) {
            allCards[i].style.display = ""; //Want to view it        
        }
    }
    else
    {
        //If our search string is NOT empty, we will display all cards that include the search string text
        for (let i=0; i<numCards; i++) {
            
            let courseName = allNames[i].innerText.toUpperCase();
            let courseTitle = allTitles[i].innerText.toUpperCase();
            let courseLast = allLastReviews[i].innerText.toUpperCase();
            
            //If nameOnly is true we only search the course name (like when using the navigation bar)
            let concatText = (nameOnly) ? courseName : courseName + courseTitle + courseLast;
            
            //Now see if "searchString" appears anywhere within "concatText"
            //If it does then display the row
            if (concatText.includes(searchString)) {
                allCards[i].style.display = ""; //we want to view it
            }
            else {
                allCards[i].style.display = "none"; //we don't want to view it
            }   
        }
    }
} //End filterCourses
