/*
Write a range function that takes two arguments, start and end, and returns
an array containing all the numbers from start up (and including) end.
Next, write a sum function that takes an array of numbers and returns theresum of these numbers.
Run the example program (console.log(sum(range(1, 10))) and see whether it does indeed return 55.
As a bonus assignment, modify your range function to take an optional third argument that indicates
the "step" value used when building the array. If no step is given, the elements go up by increments
of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 
  5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2]
*/
function range(start, end, step = 1) {
  if ((typeof start !== "number" && typeof end !== "number") || step === 0)
    return;
  else {
    let result = [];
    let currentValue = start;
    if (start > end && step < 0) {
      // negative while loop
      while (currentValue >= end) {
        result = [...result, currentValue];
        currentValue += step;
      }
    } else if (start > end && step > 0) {
      // positive while loop
      while (currentValue <= end) {
        result = [...result, currentValue];
        currentValue += step;
      }
    }
    return result;
  }
}

function sum(array) {
  if (array && array.length > 0) {
    return array.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
  }
}

/*
Arrays hava a reverse method that changes the array by inverting the order in which its
elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. 
The first, reverseArray, takes an array as argument and produces a new array that has the samen elements
in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies
the array given as argument by reversing its elements. Neither may use the standard reverse method.
Thinking back to the notes about side effects and pure functions in "Functions and Side Effects"
on page 54, which variant do you expect to be useful in more situations? Which one runs faster?
*/

/*
let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
      }
  }
}
Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument.
Also write a listToArray function that produces an array from a list and creates a new list that
adds the element to the front of the input list, and nth, which takes a list and a number and returns 
the element at the given position in the list (width zero referring to the first element) or undefined
when there is no such element. If you haven't already, also write a recursive version of nth.
*/

/* 
Write a function deepEqual that takes two values and returns true only if they are the same value
or are objects with the same properties, where the values of hte properties are equal when compared
with a recursive call to deepEqual. 
To find out whether values should be compared directly (use the === operator for that) or have their
properties compared, you can use the typeof operator. If it produces "object" for both values, you should
do a deep comparison. But you have to take one silly exception into account: because of a historical accident.
typeof null also produces "object".
The Object.keys function will be useful when you need to go over the properties of objects to compare.
*/
