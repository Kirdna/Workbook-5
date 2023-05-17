let courses = [
    {
        CourseId: "PROG100",
        Title: "Introduction to HTML/CSS/Git",
        Location: "Classroom 7",
        StartDate: "09/08/22",
        Fee: "100.00",
    },
    {
        CourseId: "PROG200",
        Title: "Introduction to JavaScript",
        Location: "Classroom 9",
        StartDate: "11/22/22",
        Fee: "350.00",
    },
    {
        CourseId: "PROG300",
        Title: "Introduction to Java",
        Location: "Classroom 1",
        StartDate: "01/09/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROG400",
        Title: "Introduction to SQL and Databases",
        Location: "Classroom 7",
        StartDate: "03/16/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROJ500",
        Title: "Introduction to Angular",
        Location: "Classroom 1",
        StartDate: "04/25/23",
        Fee: "50.00",
    }

];

// ----------------When does the PROG200 course start?
console.log("1------------------------------");
function courseWithIdProg200(course) {
    if (course.CourseId == "PROG200") {
        return true;
    }
    else {
        return false;
    }
}

let theCourseStartForProg200 = courses.find(courseWithIdProg200)

console.log(theCourseStartForProg200.StartDate);

console.log("2------------------------------");
// ---------------------What is the title of the PROJ500 course?
function courseWithIdProj500(course) {
    if (course.CourseId == "PROJ500") {
        return true;
    }
    else {
        return false;
    }
}

let theTitleOfProj500 = courses.find(courseWithIdProj500)

console.log(theTitleOfProj500.Title);

console.log("3------------------------------");
// What are the titles of the courses that cost $50 or less?
function coursesLessThan50(course) {
    if (course.Fee <= 50) {
        return true;
    }
    else {
        return false;
    }
}

let theCourseTitle = courses.filter(coursesLessThan50)

if (theCourseTitle.length > 0) {
    console.log(theCourseTitle); // displays the array
}
else {
    console.log("No values less than 50");
}


console.log("4------------------------------");
// What classes meet in "Classroom 1"?
function coursesMeetInClass1(course) {
    if (course.Location == "Classroom 1") {
        return true;
    }
    else {
        return false;
    }
}

let theCourseTitlesClassRoom1 = courses.filter(coursesMeetInClass1)

if (theCourseTitlesClassRoom1.length > 0) {
    console.log(theCourseTitlesClassRoom1); // displays the array
}
else {
    console.log("No meetup in Classroom 1");
}


console.log("------------------------------");