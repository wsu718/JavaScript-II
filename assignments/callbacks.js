// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  // GIVEN THIS PROBLEM:

  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // SOLUTION:

  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // NOTES ON THE SOLUTION:

  // firstItem is a higher order function.
  // It expects a callback (referred to as `cb`) as its second argument.
  // To test our solution, we can use the given `items` array and a variety of callbacks.
  // Note how callbacks can be declared separately, or inlined.

  // TEST 1 (inlined callback):

  const test1 = firstItem(items, item => `I love my ${item}!`);
  console.log(test1); // "I love my Pencil!"

  // TEST 2 (declaring callback before hand):

  function logExorbitantPrice(article) {
    return `this ${article} is worth a million dollars!`;
  };

  const test2 = firstItem(items, logExorbitantPrice);
  console.log(test2); // "this Pencil is worth a million dollars!"
*/


// Problem 1:

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length); 
}

function logHowLong(article) {
  return `it is ${article} long!`
}

const test = getLength(items, logHowLong);

console.log(test);

// Problem 2:

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length-1]);
}

function addSuperDuper(article){
  return 'Supppeerrrr duppperrrrrr ' + article.toLowerCase();
}

const testProblem2 = last(items, addSuperDuper);
console.log(testProblem2);

// Problem 3:

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y);
}

function multiplyByTen(article){
  return article * 10;
}

const testProblem3 = sumNums(520929, 2299182, multiplyByTen);
console.log(testProblem3);

// Problem 4:

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x * y);
}

function to10thDegree(item){
  return item**10; 
}

const testProblem4 = multiplyNums(29155, 9193, to10thDegree);
console.log(testProblem4);

// Problem 5:

const numbers = [1, 10, 100];

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  if (list.includes(item)){
    return cb(true)
  } else {
    return cb(false)
  }
}

function logOutcome(article){
  if (article === true) {
    return `So it is ${article}! The array DOES contain your number!`
  } else {
    return `Aww, shoot, guess it isn't there.`;
  }
  
}

const testProblem5 = contains(5, numbers, logOutcome);
console.log(testProblem5);

/* STRETCH PROBLEM */

const lotsOfNumbers = [1,1,5,5,5,5,10,99];

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.

}

