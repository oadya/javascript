const student = [
    { name: "john", firstname: "Alan", age: 17, score: 20 },
    { name: "Michael", firstname: "David", age: 16, score: 22 },
    { name: "Alex", firstname: "Arthur", age: 19, score: 26 },
    { name: "Gorge", firstname: "kevin", age: 25, score: 16 },
    { name: "Kloe", firstname: "alia", age: 22, score: 23 },
];

const ages = [12, 35, 45, 56, 17, 15, 34, 8, 16];

// forEach -> loop array
ages.forEach(e => console.log(e))

student.forEach(e => console.log(e.name));

// Filter -> filer data
const candrink = student.filter(e => e.age >= 21);
console.log(' can drink array ' + JSON.stringify(candrink));

const score = student.filter(e => e.score >= 20 && e.score <= 25);
console.log(' score array' + JSON.stringify(score));

const names = student.filter(e => e.name === "john" || e.name === "Alex");
console.log(' score array ' + JSON.stringify(names));

// map -- >create a new array of anything from an arrray

const studentAge = student.map(e => e.age);
console.log('ages of students ' + JSON.stringify(studentAge));

const formatedData = student.map(elt => `\n${elt.name} ${elt.firstname} [age : ${elt.age}, score : ${elt.score}]`);
console.log('Formated data ' + formatedData);


// sort --> sort data
const sortedByAge1 = student.sort((a, b) => a.age > b.age ? 1 : -1);
console.log('sorted data ' + JSON.stringify(sortedByAge1));

const sortedByAge2 = student.sort((a, b) => b.age - a.age);
console.log('reverse oder \n' + JSON.stringify(sortedByAge2));


const firstname = student.sort((a, b) => {
    if (a.firstname.toLocaleLowerCase() > b.firstname.toLocaleLowerCase()) {
        return 1;
    } else if (a.firstname.toLocaleLowerCase() < b.firstname.toLocaleLowerCase()) {
        return -1;
    } else {
        return 0;
    }
});
console.log('sort by firstname asc \n' + JSON.stringify(firstname));

// Or, using ternary operators:
const sortedByName = student.sort((a, b) => a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase() ? 1 : -1);
console.log('sort by name asc \n' + JSON.stringify(sortedByName));


// Reduce

const total = ages.reduce((total, age) => total + age, 0);
console.log('Total :' + total);



const totalscore = student.reduce((total, currentStudent) => total + currentStudent.score, 0);
console.log('totalscore :' + totalscore);







