// looping a triangle
function loopingTriangle() {
  for (let i = 0; i < 7; i++) {
    if (i === 0) continue
    console.log('#'.repeat(i))
  }
}

/* 
for numbers 1 to 100 print all numbers with exceptions:
1. print fizz if divisible by 3
2. print buzz if divisible by 5
3. print fizzbuzz if divisible by 3 and 5
 */
function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz')
    } else if (i % 3 === 0) {
      console.log('Fizz')
    } else if (i % 5 === 0) {
      console.log('Buzz')
    } else {
      console.log(i)
    }
  }
}

/* 
Write a program that creates a string that represents an 8x8 grid,
using new-line characters to separate lines. At each position of the grid
there is either a space or a # character. The characters should form a chessboard.
Passing this string to console.log should show something like this:
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
*/
function chessBoard() {
  const size = 8
  // one loop for each line
  for (let i = 0; i < size; i++) {
    // if line is even or 0 start with a space
    if (i % 2 === 0 || i === 0) {
      console.log(" #".repeat(size / 2))
    } else {
      // if line is uneven start with #
      console.log("# ".repeat(size / 2))
    }
  }
}

loopingTriangle()
fizzBuzz()
chessBoard()