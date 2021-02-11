const students = [
    {id: 20, name: 'khalid'},
    {id: 27, name: 'hasan'},
    {id: 11, name: 'ifrad'}
];
const names = students.map( x => x.name );
console.log(names);

const ids = students.map( x => x.id );
console.log(ids);

const bigger = students.filter( x => x.id > 15);
console.log(bigger);

const biggerOne = students.find( x => x.id > 15);
console.log(biggerOne);