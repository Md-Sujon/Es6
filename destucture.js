const person = { name: 'John', age: 24, email:'mdsujon829562@gmail.com', phone:'01716059420', address:'Bhola' }

const {name, age, email, phone, address} = person;

console.log(name,address,phone);
console.log(age);
console.log(email);


const man = ['Sujon', 'John', 'smita', 'robin', 'sakib', 'james', 'Rotna'];

const [first,second,...rest]  = man;
console.log(rest);

