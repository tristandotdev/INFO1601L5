const people = [{
    name: "James",
    height: 60,
    weight: 2.5
  }, {
    name: "Alice",
    height: 81,
    weight: 3
  }, {
    name: "Jason",
    height: 50,
    weight: 1.7
  }
];

let sum = 0, count = 0;

function calcBMI(weight, height) {
  return weight / (height * height);
};

function printPerson(name, weight, height) {
  console.log(`${name}'s weight: ${weight}\n${name}'s height: ${height}\n${name}'s BMI: ${calcBMI(weight, height)}\n`);
}

people.forEach(element => {
  printPerson(element.name, element.weight, element.height);
  sum += calcBMI(element.weight, element.height);
  count++;
});

console.log(`Average for ${count} persons was ${sum/count}`);