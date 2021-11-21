const student = [
    {id: 82, name: 'Sujon'},
    {id: 25, name: 'Rakib'},
    {id: 71, name: 'Afridy'},
    {id: 40, name: 'Twafiq'}
]

const studentName = student.map(s => s.name)
console.log("Map",studentName);

const ids = student.map(s => s.id);
console.log("Map",ids);

const biggerId = student.filter(s => s.id > 40);
console.log("filter",biggerId);

const biggerOne = student.find(s => s.id > 40 );
console.log("find",biggerOne);
