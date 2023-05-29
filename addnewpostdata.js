async function addcoursesandteachers()
{
   await addteachers();
   await addcourses();
}

async function addteachers()
{
    console.log("Trying to fetch teacher info");
    let response = await fetch("https://raw.githubusercontent.com/E-Fish/CompSci590Proj/main/static/teachers.json");

    //change the link to our mongoDB server when we have it set up
    let teachers = await response.json();
 
    //Get the datalist
    let datalist = document.getElementById("teacher");
   
    for (let i in teachers) {
        let first = teachers[i].first;
        let last = teachers[i].last;
        let dept = teachers[i].dept;
	      let myoption = document.createElement("option")
	      myoption.innerText = first + " " + last;
        datalist.appendChild(myoption);
    }
} //End addteachers

async function addcourses()
{
    console.log("Trying to fetch teacher info");
    let response = await fetch("https://raw.githubusercontent.com/E-Fish/CompSci590Proj/main/static/courses.json");

    //change the link to our mongoDB server when we have it set up
    let courses = await response.json();
 
    //Get the datalist
    let datalist = document.getElementById("coursecode");
   
    for (let i in courses) {
        let name = courses[i].name

        let myoption = document.createElement("option")
        myoption.innerText = name;
       
        datalist.appendChild(myoption);
    }
} //End addcourses
