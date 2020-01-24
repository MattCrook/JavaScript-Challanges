const createStudentComponent = () => {
  return `<div class="student">
            <h1>Alejandro Font</h1>
              <section>Day cohort 27</section>
                <aside>
                  Wore pants that were too short for his legs.
                  Routinely showed up late. Was an incredible
                  friend to his teammates.
                </aside>
           </div>
         `
};
const studentContainer = document.querySelector('#container');
studentContainer.innerHTML = createStudentComponent();  // adding createStudentComponent() to the id container. If you comment this out and write an H1 teg and say "Hey" what happens?

// What if we had more than one student? Below example:
const students = [
    {
        name: "Chris Miller",
        subject: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        subject: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        subject: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        subject: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        subject: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        subject: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        subject: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        subject: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        subject: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        subject: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        subject: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        subject: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
];

const createNewStudentComponent = (name, subject, info) => {
  return `<div class="student">
            <h1>${name}</h1>
              <section>${subject}</section>
                <aside>${info}
                </aside>
           </div>
         `
};
// invoke 
console.log(createNewStudentComponent('Ray Madrano', 'History', 'Needs to contribute to in-class discussions'));

const studentRay = createNewStudentComponent('Ray Madrano', 'History', 'Needs to contribute to in-class discussions');
console.log(studentRay);


const ray = document.createElement('div');
ray.innerHTML = studentRay;
studentContainer.appendChild(ray);

const newStudentContainer = document.querySelector('#container');
for (let i = 0; i < students.length; i++) {
  student = students[i];
  studentContainer.innerHTML += createNewStudentComponent(
    student.name,
    student.subject,
    student.info);
};
console.log(newStudentContainer);


// Ten of the students are currently passing the course, and two students are not. You want passing, and non-passing, student information to be styled differently. You want passing students' names to be green, and non-passing students to be orange.
// How might you refactor the function body again to use the score property of each student object to change the output of the function?
