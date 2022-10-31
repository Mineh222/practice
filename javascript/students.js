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
// Complexities:
// n = length of array
// time: O(n)
// space: O(1)

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
// Complexities:
// n = length of array
// time: O(n)
// space: O(n)

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
// Complexities:
// n = length of array
// time: O(n)
// space: O(n)

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
// Complexities:
// n = length of array
// time: O(n)
// space: O(1)

const sumOfGroupAges = (students) => {
    let ageSum = 0;

    students.forEach(student => {
        if (student.group === 1) {
            agesum += student.age;
        }
    })

    return ageSum;
}

// console.log(sumOfGroupAges(students)); => 56

// e. Produce the average age of students in group 2.
// Complexities:
// n = length of array
// time: O(n)
// space: O(1)

const averageStudentAgeInGroup = (students) => {
    let ageSum = 0;
    let groupCount = 0;

    students.forEach(student => {
        if (student.group === 2) {
            groupCount += 1;
            ageSum += student.age;
        }
    })

    return ageSum / groupCount;
}

// console.log(averageStudentAgeInGroup(students)); => 14.333333333333334

// f. Add the additional students below to the existing list of students.
// Complexities:
// n = length of array
// time: O(n)
// space: O(n)

const moreStudents = [
    { "firstName":"Manu", "lastName": "Chao", "group":1, "age":17 },
    { "firstName":"Shakira", "lastName": "Shakira", "group":2, "age":12 }
];

const addMoreStudents = (moreStudents, students) => {

    moreStudents.forEach(student => {
        students.push(student);
    })

    return students;
}

// console.log(addMoreStudents(moreStudents, students));
students = [
    { firstName: 'Ricardo', lastName: 'Arjona', group: 1, age: 14 },
    { firstName: 'Luis', lastName: 'Silva', group: 1, age: 14 },
    { firstName: 'Rocio', lastName: 'Durcal', group: 1, age: 15 },
    { firstName: 'Gloria', lastName: 'Estefan', group: 2, age: 14 },
    { firstName: 'Franco', lastName: 'De Vita', group: 2, age: 14 },
    { firstName: 'Emmanuelle', lastName: 'Beart', group: 1, age: 13 },
    { firstName: 'Etienne', lastName: 'Daho', group: 2, age: 15 },
    { firstName: 'Manu', lastName: 'Chao', group: 1, age: 17 },
    { firstName: 'Shakira', lastName: 'Shakira', group: 2, age: 12 }
]

// g. Update the age of some students
// Complexities:
// n = length of array
// time: O(n^2)
// space: O(n)

const updates = [
    { "firstName":"Manu", "lastName": "Chao", "group":1, "age":18 },
    { "firstName":"Shakira", "lastName": "Shakira", "group":2, "age":14 }
];

const updateAges = (updates, students) => {
    updates.forEach(update => {
        students.forEach(student => {
            if ( student.firstName === update.firstName && student.lastName === update.lastName ) {
                student.age = update.age
            }
        });
    })
    return students;
}

// console.log(updateAges(updates, students))

students = [
    { firstName: 'Ricardo', lastName: 'Arjona', group: 1, age: 14 },
    { firstName: 'Luis', lastName: 'Silva', group: 1, age: 14 },
    { firstName: 'Rocio', lastName: 'Durcal', group: 1, age: 15 },
    { firstName: 'Gloria', lastName: 'Estefan', group: 2, age: 14 },
    { firstName: 'Franco', lastName: 'De Vita', group: 2, age: 14 },
    { firstName: 'Emmanuelle', lastName: 'Beart', group: 1, age: 13 },
    { firstName: 'Etienne', lastName: 'Daho', group: 2, age: 15 },
    { firstName: 'Manu', lastName: 'Chao', group: 1, age: 18 },
    { firstName: 'Shakira', lastName: 'Shakira', group: 2, age: 14 }
]
