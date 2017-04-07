var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

students.sort(function(name1, name2) {

  if (name1.name < name2.name){
    return -1;
  }  

  if (name1.name > name2.name){
    return 1;
  }

  if (name1.name === name2.name) {
    return name2.age - name1.age;
  }
});

console.log(students);