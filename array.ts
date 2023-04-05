// const person: {
//   name: string;
//   age: number;
// } = {
const person = {
  name: 'Maximilian',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
}

let favoriteActivities: string[]
favoriteActivities = ['Sports']

console.log(person.name)

// person.address // gives error as error key doesnt exist on person object

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase())
  // console.log(hobby.map()); // !!! ERROR !!!
}
