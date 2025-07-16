// 1. Check Even or Odd 
// Definition: Determine if a number is even or odd. 
// Input: 7 
// Output: Odd 


// const a = 7

// if(a%2 == 0)
//     console.log("Even Number")
// else
//     console.log("Odd Number")

// 2. Find the Maximum of Two Numbers 
// Definition: Given two numbers, print the larger one. 
// Input: 5 9 
// Output: 9     

// const a = 5
// const b = 9

// if(a > b)
//     console.log(a,"is max")
// else
//     console.log(b,"is max")

// 3. Check Leap Year 
// Definition: Check if a given year is a leap year. 
// Input: 2020 
// Output: Leap Year

// const year = 2020

// if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//   console.log('Leap Year')
// } else {

//   console.log('Not a Leap Year')
// }
  

// 4. Sum of Natural Numbers 
// Definition: Calculate the sum of the first n natural numbers. Input: 5 
// Output: 15 

// const n = 5

// const ans = n * (n+1)/2

// console.log(ans)


// 5. Factorial of a Number 
// Definition: Calculate factorial of a number. 
// Input: 4 
// Output: 24 

// const n = 4
// let fact =1

// for(let i = 1;i<=n;i++)
//     fact *=i

// console.log(fact)


// 6. Print Multiplication Table 
// Definition: Display multiplication table of a number up to 10.
// Input: 3 
// Output: 3 x 1 = 3 
// ... 
// 3 x 10 = 30 

// const num = 3
// let i = 1
// let ans = 1
// for(i=1; i<=10; i++)
// {
//     ans = num * i
//     console.log(`${num} x ${i} = ${ans}`)
// }


// 7. Reverse a Number 
// Definition: Reverse the digits of a number. Input: 1234 
// Output: 4321 

// let num = 1234
// let reversed = 0


// while (num > 0) {
//   reversed = reversed * 10 + (num % 10)
//   num = (num - (num % 10)) / 10
// }

// console.log(reversed)



// 8. Palindrome Check (Number) 
// Definition: Check if a number reads the same backward. Input: 121 
// Output: Palindrome 

// let num = 121
// let rev = 0
// let temp = num

// while (num) {
//   rev = rev * 10 + (num % 10)
//   num = (num - num % 10) / 10
// }

// if(temp === rev)
//     console.log("Palindrome")
// else
//     console.log("Not Palindrome")    


// 9. Check Prime Number 
// Definition: Check whether the input number is prime. Input: 11 
// Output: Prime 

// let num = 5
// let count = 0

// for(let i = 0; i<= num; i++)
// {
//     if(num %i === 0)
//     {
//         count++
//     }
// }

// if(count === 2)
//     console.log("Prime")
// else
//     console.log("Not prime")


// 10. Count Digits in a Number 
// Definition: Count how many digits a number contains. Input: 5023 
// Output: 4 

let num = 5023
let count = 0

while (num > 0) {
  count++
  num = (num - num % 10) / 10
}

console.log(count)

