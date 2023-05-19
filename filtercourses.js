function filtercourses() 
{
    //Get text from the search bar
    let input = document.getElementById("coursesearch");
    let searchString = input.value.toUpperCase();
    
    //This is for debugging.
    //alert(searchString);
    
    //Get the courseCards
    let collection = document.getElementsByClassName("courseCard");
    
    if (collection.length == 0) {
        alert("filtercourses: error getting course cards");
        return;
    }
    
    if (searchString.length == 0) {
        //If our search string is empty display all cards
        for (let i=0; i<collection.length; i++) {
            collection[i].style.display = ""; //Want to view it        
        }
    }
    else
    {
        //If our search string is NOT empty, we will display all rows that include the search string text
        for (let i=0; i<collection.length; i++) {
            let card = collection[i];
            
            //In the HTML, each card sould have 3 children, the <h1>, <p>, and <h3> tags
            let num = card.childNodes.length; 
            if (num != 4) continue;
            
            let concatText = ""; //concatenate text from all the children
        
            for (let j=0; j<num; j++) {
                let text = card.childNodes[j].innerHTML;
                concatText += text.toUpperCase();
            }
            
            //Now see if "searchString" appears anywhere within "concatText"
            //If it does then display the row
            if (concatText.indexOf(searchString) > -1) {
                card.style.display = ""; //we want to view it
            }
            else {
                card.style.display = "none"; //we don't want to view it
            }   
        }
    }
} //End filterCourses
