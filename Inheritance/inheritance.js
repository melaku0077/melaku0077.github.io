var Person = function () {};

Person.prototype.initialize = function (name) {
  this.name = name;
};

var Teacher = function () {};
Teacher.prototype = new Person();

Teacher.prototype.teach = function (subject) {
  console.log(this.name + " is now teaching " + subject);
};

var wapTeacher = new Teacher();

wapTeacher.initialize("Prof.Mohammed Elmatary");
wapTeacher.teach("JavaScript");
