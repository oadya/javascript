const student = [
    { name: "john", firstname: "Alan", age: 17, score: 20 },
    { name: "Michael", firstname: "David", age: 16, score: 22 },
    { name: "Alex", firstname: "Arthur", age: 19, score: 26 },
    { name: "Gorge", firstname: "kevin", age: 25, score: 16 },
    { name: "Kloe", firstname: "alia", age: 22, score: 23 },
];

const ages = [12, 35, 45, 56, 17, 15, 34, 8, 16];

// forEach, for in,for of
ages.forEach(e => console.log(e))

student.forEach(e => console.log(e.name));

console.log('--- for in----- ');
let text = "";
for (let x in student) {
    text += student[x];
    console.log(x);
}
console.log(text);

console.log('--- for of----- ');

for (let x of student) {
    console.log(x)
}
// Filter -> filer data
console.log('--- filter----- ');
const candrink = student.filter(e => e.age >= 21);
console.log(' can drink array ' + JSON.stringify(candrink));

const score = student.filter(e => e.score >= 20 && e.score <= 25);
console.log(' score array' + JSON.stringify(score));

const names = student.filter(e => e.name === "john" || e.name === "Alex");
console.log(' score array ' + JSON.stringify(names));

// map -- >create a new array of anything from an arrray

console.log('--- map----- ');
const studentAge = student.map(e => e.age);
console.log('ages of students ' + JSON.stringify(studentAge));

const formatedData = student.map(elt => `\n${elt.name} ${elt.firstname} [age : ${elt.age}, score : ${elt.score}]`);
console.log('Formated data ' + formatedData);


// sort --> sort data
console.log('--- sort----- ');
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

console.log('--- reduce----- ');
const total = ages.reduce((total, age) => total + age, 0);
console.log('Total :' + total);



const totalscore = student.reduce((total, currentStudent) => total + currentStudent.score, 0);
console.log('totalscore :' + totalscore);


console.log('--- some----- ');
const testSome = ages.some(item => item < 14);
console.log('test some :' + testSome);


console.log('--- every----- ');
const testEvery = ages.every(item => item > 0);
console.log('test every :' + testEvery);


console.log('--- find----- ');
const testfindStudent = student.find(e => e.name === "john");
console.log('test find :' + JSON.stringify(testfindStudent));


console.log('--- findIndex----- ');

const testfindIndexStudent = student.findIndex(e => e.name === "john");
console.log('test findIndex :' + testfindIndexStudent);


console.log('--- Array.from----- ');

const str = 'java';
console.log([...str]);

const fromString = Array.from(str);
console.log('test array fromString : ' + fromString);

const emptyArray = Array.from({ length: 5 }, (value, index) => value); // fill with value
console.log(emptyArray);


const emptyArray2 = Array.from({ length: 5 }, (value, index) => index); // fill with index
console.log(emptyArray2);


const emptyArray3 = Array.from({ length: 5 }, (value, index) => index * index);
console.log(emptyArray3);

const oldWay = new Array(3);
console.log('old Way', oldWay);


const oldWay2 = (new Array(3)).fill(0);
console.log('old Way 2', oldWay2);


const oldWay3 = (new Array(3)).fill(0).map((v, i) => i);
console.log('old Way ', oldWay3);

const unique = [1, 1, 2, 3, 3];
console.log('unique', Array.from(new Set(unique)));

console.log('unique2', [... new Set(unique)]);