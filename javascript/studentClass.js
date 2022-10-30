class Students {
    constructor(students) {
        this.students = students;
    }

    getAgeSumByGroup(groupNum) {
        let ageSum = 0;

        this.students.forEach(student => {
            if (student.group === groupNum) {
                ageSum += student.age
            }
        });
        return ageSum;
    }

    getFullNames() {
        const fullNamesList = [];

        this.students.forEach(student => {
            fullNamesList.push(`${student.firstName} ${student.lastName}`)
        })

        return fullNamesList;
    }
}

let students = [
    { "firstName":"Ricardo", "lastName": "Arjona", "group":1, "age":14 },
    { "firstName":"Luis", "lastName": "Silva", "group":1, "age":14 },
    { "firstName":"Rocio", "lastName": "Durcal", "group":1, "age":15 },
    { "firstName":"Gloria", "lastName": "Estefan", "group":2, "age":14},
    { "firstName":"Franco", "lastName": "De Vita", "group":2, "age":14 },
    { "firstName":"Emmanuelle", "lastName": "Beart", "group":1, "age":13 },
    { "firstName":"Etienne", "lastName": "Daho", "group":2, "age":15 }
];
// create new instance of Students class
let studentsList = new Students(students);
// console.log(studentsList.getAgeSumByGroup(2)); => 43
// console.log(studentsList.getFullNames());
// => [
//   'Ricardo Arjona',
//   'Luis Silva',
//   'Rocio Durcal',
//   'Gloria Estefan',
//   'Franco De Vita',
//   'Emmanuelle Beart',
//   'Etienne Daho'
// ]

module.exports = Students;
