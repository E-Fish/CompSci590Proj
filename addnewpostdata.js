// Combining functions
async function addcoursesandteachers()
{
   await addteachers();
   await addcourses();
}

// Adds teachers to datalist dropdowns in newpost.html
async function addteachers()
{
    // Fetches information from json file
    console.log("Trying to fetch teacher info");
    let response = await fetch("https://raw.githubusercontent.com/E-Fish/CompSci590Proj/main/static/teachers.json");

    // Adds all data to "teachers" variable
    let teachers = await response.json();
 
    //Create the datalist
    let datalist = document.getElementById("teacher");
   
    // Loops through the teachers and adds them to the datalist
    for (let i in teachers) {
        let first = teachers[i].first;
        let last = teachers[i].last;
        let dept = teachers[i].dept;
	      let myoption = document.createElement("option")
	      myoption.innerText = first + " " + last;
        datalist.appendChild(myoption);
    }
} //End addteachers

// Adds courses to datalist dropdowns in newpost.html
async function addcourses()
{
    // Fetches information from json file
    console.log("Trying to fetch teacher info");
    let response = await fetch("https://raw.githubusercontent.com/E-Fish/CompSci590Proj/main/static/courses.json");

    //Adds all data to "courses" variable
    let courses = await response.json();
 
    //Create the datalist
    let datalist = document.getElementById("coursecode");
   
    // Loops through all the courses and adds their course code into the datalist
    for (let i in courses) {
        let name = courses[i].name

        let myoption = document.createElement("option")
        myoption.innerText = name;
       
        datalist.appendChild(myoption);
    }
} //End addcourses
