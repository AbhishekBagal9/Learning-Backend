class student {
  constructor(name,marks){
    this.name = name;
    this.marks = marks;
  }
 getaverage(){
  return this.marks
 }
}


const student1 = new student("John", 85);
const student2 = new student("Jane", 90);

const students = [student1, student2];

console.log(students.map(student => student.getaverage()));