# FunctionConstructor

The task

1. Write a constructor function Human, which takes an object as arguments and creates properties name, surname and age.
Human contains methods:
  getFullName () (gets the full name from name, surname into the string);
  setFullName (fullName) (splits the string into name, surname);
The surname, name and age properties must be present in all FCs. It is necessary to get rid of duplication using context substitution.

2. Write a constructor function Student, which inherits from Human and which can be used like this:
let s = new Student ('Student 1', [10,9,8,1,10]), // name, grades
Each student should have methods:
  getAverageMark () - returns the average mark;
  getMinMark () - returns the minimum mark;
  getMaxMark () - Returns the maximum mark.
The getFullName () method adds the "-student" prefix in addition to the full name.

3. Write a constructor function Teacher (the function inherits from Human), which takes an object as arguments and creates a group property (an array of at least 5 students created using the Student function) and contains the methods:
  getListOfNamesByAverageMark () - returns an array of student names sorted by the highest average grade;
  getStudentByName (name) - get one student object by name;
  removeStudentByName (name) - remove the student object found by name;
  updateStudentByName (new Student (...), name) - find the student object by name and replace it with student (a new instance of the Student constructor function);
