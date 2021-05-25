// конструктор Human
function Human({ name, surname }) {
  this.name = name;
  this.surname = surname;
}
Human.prototype.setFullName = function (fullName) {
  if (typeof fullName == "string") {
    let arr = fullName.split(" ");
    this.name = arr[0];
    this.surname = arr[1];
  } else {
    console.error("Incorrect full name");
  }
};
Human.prototype.getFullName = function () {
  return `${this.name} ${this.surname}`;
};

let human = new Human({ name: "Jon", surname: "Smit" });
console.log(human);
let fullName = human.getFullName();
console.log(fullName);
human.setFullName("Jake Def");
console.log(human);

// конструктор Student
function Student({ marks, ...info }) {
  Human.call(this, info);
  this.marks = marks;
}
Student.prototype = Object.create(Human.prototype);
Student.prototype.constructor = Student;
Student.prototype.averageMark = function () {
  return this.marks.reduce((a, b) => a + b) / this.marks.length;
};
Student.prototype.minMark = function () {
  this.marks.sort()
  return this.marks[0]
};
Student.prototype.maxMark = function () {
  this.marks.sort((a, b) => b-a)
  return this.marks[0]
};
Student.prototype.getFullName = function () {
  return `${Human.prototype.getFullName.call(this)} - student`;
};

function SortAverageMarks(students) {
  let maxMarkArr = students.map((student) => ({
    name: student.name,
    mark: student.averageMark(),
  }));
  maxMarkArr.sort(function (a, b) {
    return a.mark - b.mark;
  });
  return maxMarkArr;
}

let sE = new Student({marks:[10, 9, 8, 1, 10],name:"Vasia",surname:"E"});
console.log(sE.getFullName()); 
sE.setFullName("Jake Def");
console.log("student",sE);
console.log(sE.maxMark());
console.log(sE.minMark());

// конструктор Teacher
function Teacher({ group, ...info }) {
  Human.call(this, info);
  this.group = group;
}
Teacher.prototype = Object.create(Human.prototype);
Teacher.prototype.constructor = Teacher;

Teacher.prototype.getListOfNamesByAverageMark = function () {
  this.group.sort((a, b) => a.averageMark() - b.averageMark())
  return this.group
};
Teacher.prototype.getStudentByName = function (name) {
  return this.group.find((student) => student.name == name);
};
Teacher.prototype.removeStudentByName = function (name) {
  this.group = this.group.filter((student) => student.name != name);
  return this.group;
};

Teacher.prototype.updateStudentByName = function (
  student,
  nameS
) {
  let index = this.group.findIndex((student) => student.name == nameS);
  this.group[index] = student;
  return this.group;
};

// создание постоянного массива студентов
let group = [];
group.push(new Student({marks:[10, 9, 8, 1, 10],name:"Student 1",surname:"E"}));
group.push(new Student({marks:[5, 3, 2, 8, 4],name:"Student 2",surname:"D"}));
group.push(new Student({marks:[7, 6, 8, 10, 3],name:"Student 3",surname:"C"}));
group.push(new Student({marks:[3, 5, 8, 9, 3],name:"Student 4",surname:"B"}));
group.push(new Student({marks:[10, 6, 3, 9, 9],name:"Student 5",surname:"A"}));

let teacher = new Teacher({
  group: group,
  name: "Riana",
  surname: "Grande",
});

console.log(teacher);
console.log(
  "getListOfNamesByAverageMark",
  teacher.getListOfNamesByAverageMark()
);
//- получить один объект студента по имени
console.log("getStudentByName", teacher.getStudentByName("Student 3"));
//- удалить объект студена, найденного по имени.
console.log("removeStudentByName", teacher.removeStudentByName("Student 3"));
// проверка работы removeStudentByName(name)
console.log("getStudentByName", teacher.getStudentByName("Student 3"));
console.log(teacher);
// проверка работы updateStudentByName({name, marks}, nameS)
let newStudent = new Student({ marks: [1, 2, 8], name: "ddd", surname: "fff" })

console.log(
  "updateStudentByName",
  teacher.updateStudentByName(
    newStudent,
    "Student 5"
  )
);