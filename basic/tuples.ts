// const person1: {
//   name: string;
//   age: number;
// } = {
const person1: {
  name: string
  age: number
  hobbies: string[]
  role: [number, string]
} = {
  name: 'Maximilian',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author'],
}
// in tuple we can push into the tuple // have to care of this

// person1.role.push('admin');

// but we can't assign the wrong value in tuple
// person1.role[1] = 10;

// person1.role = [0, 'admin', 'user'];

let favoriteActivities_: string[]
favoriteActivities_ = ['Sports']

console.log(person1.name)

for (const hobby of person1.hobbies) {
  console.log(hobby.toUpperCase())
  // console.log(hobby.map()); // !!! ERROR !!!
}
