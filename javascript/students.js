let students = [
    { "firstName":"Ricardo", "lastName": "Arjona", "group":1, "age":14 },
    { "firstName":"Luis", "lastName": "Silva", "group":1, "age":14 },
    { "firstName":"Rocio", "lastName": "Durcal", "group":1, "age":15 },
    { "firstName":"Gloria", "lastName": "Estefan", "group":2, "age":14},
    { "firstName":"Franco", "lastName": "De Vita", "group":2, "age":14 },
    { "firstName":"Emmanuelle", "lastName": "Beart", "group":1, "age":13 },
    { "firstName":"Etienne", "lastName": "Daho", "group":2, "age":15 }
];

// a. Produce the total number of students in group 2.

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

// b. Return a list of full names as strings.

const fullNames = (students) => {
    const fullNamesList = [];

    students.forEach(student => {
        fullNamesList.push(`${student.firstName} ${student.lastName}`)
    })

    return fullNamesList;
}

// console.log(fullNames(students))
// [
//     'Ricardo Arjona',
//     'Luis Silva',
//     'Rocio Durcal',
//     'Gloria Estefan',
//     'Franco De Vita',
//     'Emmanuelle Beart',
//     'Etienne Daho'
// ]

// c. Return a list of unique ages.

const uniqueAges = (students) => {
    const agesCount = {};
    const uniqueAges = [];

    for (let student of students) {
        if (!(student.age in agesCount)) {
            agesCount[student.age] = 1
        } else {
            agesCount[student.age] += 1
        }
    }

    for (let age in agesCount) {
        if (agesCount[age] === 1) {
            uniqueAges.push(age)
        }
    }

    return uniqueAges;
}

// console.log(uniqueAges(students)); => [ '13' ]

// d. Return  the sum of the age of all students in group 1.

const sumOfGroupAges = (students) => {
    let sum = 0;

    students.forEach(student => {
        if (student.group === 1) {
            sum += student.age;
        }
    })

    return sum;
}

// console.log(sumOfGroupAges(students)); => 56
