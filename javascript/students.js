let students = [
    { "firstName":"Ricardo", "lastName": "Arjona", "group":1, "age":14 },
    { "firstName":"Luis", "lastName": "Silva", "group":1, "age":14 },
    { "firstName":"Rocio", "lastName": "Durcal", "group":1, "age":15 },
    { "firstName":"Gloria", "lastName": "Estefan", "group":2, "age":14},
    { "firstName":"Franco", "lastName": "De Vita", "group":2, "age":14 },
    { "firstName":"Emmanuelle", "lastName": "Beart", "group":1, "age":13 },
    { "firstName":"Etienne", "lastName": "Daho", "group":2, "age":15 }
];

// Produce the total number of students in group 2.

const groupSum = (students) => {
    let totalStudents = 0;

    students.forEach(student => {
        if (student.group === 2) {
            totalStudents += 1;
        }
    })
    return totalStudents;
}

// console.log(groupSum(students)); => 3
