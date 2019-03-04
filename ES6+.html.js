/*let example = 'Hello';

console.log(example)
document.getElementById('example').innerText = example;*/
const personalInfo = {
  firstName: 'Mateusz',
  lastName: 'Osinski',
  city: 'Lubon',
  state: 'Wielkopolska'
};

const {firstName: fn, lastName: ln} = personalInfo;

console.log(`${fn} ${ln}`);

let [name, middeName, laastName] = ['Krzysztof', 'Maria', 'Mateusz'];
laastName = 'Pjter';
console.log(name + " " + middeName + " " +  laastName);
