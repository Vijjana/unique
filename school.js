let student1 = {
  name : "Sudhishna",
  age : 20,
  gradeLevel : "3rd Grade",
  subjects : ["AI","CyberSecurity","OOAD","OOPS","WT"],
  attendance : {
    present : 24,
    absent : 77,
  },
};
let student2 = {
  name : "flm",
  age : 21,
  gradeLevel : "4th Grade",
  subjects : ["ai","cyberSecurity","ooad","oops"],
  attendance : {
    present : 87,
    absent : 74,
  },
};
let student3 = {
  name : "honey",
  age : 20,
  gradeLevel : "1st Grade",
  subjects : ["AI"],
  attendance : {
    present : 75,
    absent : 57,
  },
};
let student4 = {
  name : "upsc",
  age : 20,
  gradeLevel : "2nd Grade",
  subjects : ["AI","CyberSecurity"],
  attendance : {
    present : 27,
    absent : 47,
  },
};
let student5 = {
  name : "sweety",
  age : 20,
  gradeLevel : "2nd Grade",
  subjects : ["AI","CyberSecurity"],
  attendance : {
    present : 24,
    absent : 77,
  },
};
let school = {
  name : "word & deed",
  location : "vansthalipuram",
  students :[student1,student2,student3,student4,student5],
};
function addStudent()
{
  let student6 = {
     name : "sneha",
      age : 25,
      gradeLevel : "4th Grade",
      subjects : ["AI","CyberSecurity","wt"],
      attendance : {
        present :27,
        absent : 57,
      },
  };
  school.students.push(student6);

}
addStudent();
// console.log(school);
function updateAttendance(studentName,isPresent)
{
  for(let i = 0;i<=school.students.length-1;i++)
    {
      if(studentName == school.students[i].name)
      {
        if(isPresent)
        {
          school.students[i].attendance.present += 1;
        }
        else
        {
          school.students[i].attendance.absent += 1;
        }
        return;
      }
    }
}
updateAttendance("honey",true);
// console.log(school);
function findStudentByGrade(grade)
{
  return school.students.filter(function(item){
    return item.gradeLevel === grade;
  })
}
let s = findStudentByGrade("3rd Grade");
// console.log(s);

let subjectArray = [];
for(let i = 0;i<=school.students.length-1;i++)
  {
    subjectArray = subjectArray.concat(school.students[i].subjects);
  }
// console.log(subjectArray);
let object = {}
for(let i=0;i<=subjectArray.length-1;i++)

  {
     var subject = subjectArray[i]
    if(object[subject] === undefined)
    {
      object[subject] = 1;
    }
    else
      {
        object[subject]++;
      }
  }
// console.log(object);
let maxCount = 0;
let mostCommonSubject = '';
for(let key in object){
  if(object[key] > maxCount)
    {
      maxCount = object[key];
      mostCommonSubject = key
    }
  }
console.log(mostCommonSubject)
  