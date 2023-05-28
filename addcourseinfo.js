async function addcourseinfo()
{
    let selected = localStorage.getItem("classIndex");
    console.log("Trying to fetch posts")
    let response = await fetch("https://raw.githubusercontent.com/E-Fish/CompSci590Proj/main/static/courses.json");
    let courses = await response.json(); 

    let divTag = document.getElementById("allInfo");

    let cnt = 0;

    for (let i in courses){
        let index = courses[i].indexCourse;
        
        if (index != selected) continue;

        let name = courses[i].name; //name of course ie ANT500
        let title = courses[i].title; //title of course ie Cultural Anthropology
        let description = courses[i].desc; //description of course from course book
        let rating = courses[i].rating; //rating of course (not yet in courses.json file)

        let courseName = document.createElement("div");
        courseName.setAttribute("class", "h4");
        courseName.innerText = name;

        let courseTitle = document.createElement("div");
        courseTitle.setAttribute("class", "h4");
        courseTitle.innerText = title;

        let courseDescription = document.createElement("div");
        courseDescription.setAttribute("class", "h4");
        courseDescription.innerText = description;

        divTag.appendChild(courseName + " : " + courseTitle);
        divTag.appendChild("Description: " + courseDescription);

        cnt++;
    }
}

