import "./App.css";

/* 
1. Create a React component called ArrayOperations, which performs the following calculations on the given array.

Given array: const numbers = [1, 2, 3, 4, 5];

Calculate the sum of all numbers in the array. Use appropriate array method.

Calculate the average of all numbers in the array. Use appropriate array method.

Find the maximum out of the numbers in the array. Use appropriate array method.

Find the minimum out of the numbers in the array. Use appropriate array method.
*/

const ArrayOperations = () => {
  const numbers = [1, 2, 3, 4, 5];
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  const avg = sum / numbers.length;
  const max = numbers.reduce(
    (acc, curr) => (acc > curr ? acc : curr),
    numbers[0],
  );
  const min = numbers.reduce(
    (acc, curr) => (acc < curr ? acc : curr),
    numbers[0],
  );
  return (
    <div>
      <h1>Array Operations</h1>
      <p>Sum: {sum}</p>
      <p>Average: {avg}</p>
      <p>Maximum: {max}</p>
      <p>Minimum: {min}</p>
    </div>
  );
};

/* 
2. Create a React component called ObjectManipulation, to update the age of person from 28 to 29 and display the person details. Use appropriate ES6 syntax.

*/

const ObjectManipulation = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h2>Person Details</h2>
      <p>Name: {data.name}</p>
      <p>Age: {(data.age = 29)}</p>
      <p>City: {data.city}</p>
    </div>
  );
};

//3. Create a React component called SquareArea, to find the area of a square. The sides of square is 5 cm in length.

const SquareArea = () => {
  const sides = 5;
  const area = sides * sides;
  return (
    <div>
      <h2>Area of Square </h2>
      <p>The area of the square is: {area}</p>
    </div>
  );
};

//4. Create a React component called CapitalizeString, to capitalize the given string. - "hello world".

const CapitalizeString = () => {
  const str = "hello world";
  const capitalizedStr = str.toUpperCase();
  return (
    <div>
      <h2>Capitalize Text</h2>
      <p>{capitalizedStr}</p>
    </div>
  );
};

//5. Create a React component named CircleArea, to find the area of a circle. The radius of the circle is 8 cm.

const CircleArea = () => {
  const radius = 8;
  const area = (Math.PI * radius ** 2).toFixed(2);

  return (
    <div>
      <h2>Area of Circle</h2>
      <p>Area of the Circle is: {area}</p>
    </div>
  );
};

export default function App() {
  const person = {
    name: "Sarah",
    age: 28,
    city: "New York",
  };

  return (
    <main>
      <ArrayOperations />
      <ObjectManipulation data={person} />
      <SquareArea />
      <CapitalizeString />
      <CircleArea />
    </main>
  );
}
