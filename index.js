//object literal
let bob = {
  fname: "bob",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1603',
      grades: [ 89, 34, 67 ]
    },
    {
      course: 'INFO 1601',
      grades: [ 89, 35, 67 ]
    }
  ]
};

let sally = {
  fname: "sally",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1601',
      grades: [ 100, 89, 79 ]
    }
  ]
};

let paul = {
  fname: "paul",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1600',
      grades: [ 89, 34, 67 ]
    }
  ]
};

const students = [bob, sally, paul];

//Given a student object and a course code, return the average grade the student has for that course or return -1 if the course is not in the student's transcript.

function getAverageGrade(student, course) {
  let sum = 0, count = 0;

  let trans = student.transcript;

  trans.forEach((e) => {
    if(e.course == course) {
      let grades = e.grades;

      grades.forEach(grade => {
        console.log(grade);
        sum += grade;
        count++;
      });
    } else return -1;
  });

  return sum/count;
};

function getAssignmentMark(student, course, num) {
  let grade = -1;
  
  student.transcript.forEach(element => {
    if(element.course == course) {
      if(num > element.grades.length) grade = -1;
      else return grade = element.grades[num];
    }
  });


  return grade;
}

function averageAssessment(students, courseName, assignment) {
  let sum = 0;

  students.forEach(a => {
    a.transcript.forEach(b => {
      if(b.course == courseName) {
        sum += b.grades[assignment]; 
      }
    });
  });

  if(sum == 0) return -1;
  else return sum;
}

console.log(getAverageGrade(bob, 'INFO 1601'));
console.log(getAssignmentMark(bob, 'INFO 1601', 0))
console.log(averageAssessment(students, 'INFO 1601', 0));