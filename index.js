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

// let num = 5023
// let count = 0

// while (num > 0) {
//   count++
//   num = (num - num % 10) / 10
// }

// console.log(count)

// 11. Sum of Digits
// Definition: Calculate the sum of all digits in a number.
// Input: 123
// Output: 6

// let num = 123
// let sum = 0

// while (num > 0) {
//   sum = sum + num % 10;          
//   num = (num - num % 10) / 10    
// }

// console.log(sum)

// 12. Check Armstrong Number
// Definition: Check if the number is equal to the sum of its digits each raised to the power of
// the number of digits.
// Input: 153
// Output: Armstrong


// 13. Generate Fibonacci Series
// Definition: Generate the first n Fibonacci numbers.
// Input: 5
// Output: 0 1 1 2 3

// let n = 5
// let a = 0, b = 1, c

// for (let i = 0; i < n; i++) {
//   console.log(a)
//   c = a + b
//   a = b
//   b = c
// }


// 14. Check Vowel or Consonant
// Definition: Determine if a given character is a vowel.
// Input: a
// Output: Vowel

// let char = 'a'

// if (
//   char === 'a' || char === 'e' || char === 'i' || 
//   char === 'o' || char === 'u' || 
//   char === 'A' || char === 'E' || char === 'I' || 
//   char === 'O' || char === 'U'
// ) {
//   console.log("Vowel")
// } else {
//   console.log("Consonant")
// }

// 15. Simple Calculator
// Definition: Perform +, -, *, / between two numbers.
// Input: 4 + 2
// Output: 6

// let a = 4
// let b = 2
// let val = '+'

// if(val === '+')
//   console.log(a+b)
// else if(val === '-')
//   console.log(a-b)
// else if(val === '*')
//   console.log(a*b)
// else 
//   console.log(a/b)

// 16. Find GCD (HCF)
// Definition: Calculate the greatest common divisor of two numbers.
// Input: 20 28
// Output: 4

// let a = 20
// let b = 28
// let temp

// while (b != 0) {
//   temp = b
//   b = a % b
//   a = temp
// }

// console.log(a)


// 17. Check Perfect Number
// Definition: A number whose sum of divisors equals itself.
// Input: 28
// Output: Perfect

// let num = 28
// let sum = 0

// for (let i = 1; i < num; i++) {
//   if (num % i === 0) {
//     sum += i
//   }
// }

// if (sum === num) {
//   console.log("Perfect")
// } else {
//   console.log("Not Perfect")
// }


// 18. Print All Divisors
// Definition: Display all positive divisors of a number.
// Input: 10
// Output: 1 2 5 10

// let num = 10

// for (let i = 1; i <= num; i++) {
//   if (num % i === 0) {
//     console.log(i)
//   }
// }


// 19. Number is Positive, Negative or Zero
// Definition: Check if number is +ve, -ve, or zero.
// Input: -5
// Output: Negative
// let num = -5

// if (num > 0) {
//   console.log("Positive")
// } else if (num < 0) {
//   console.log("Negative")
// } else {
//   console.log("Zero")
// }

// 20. Find Power (Exponentiation)
// Definition: Compute a raised to the power b (a^b).
// Input: 2 3
// Output: 8

// let a = 2
// let b = 3

// console.log(a ** b)


// Extra = add file 'add.js' 

// import add from "./add.js"
// console.log(add(11,22))
// console.log(add(33,22))

// using package path 

// import path from "path"

// const path  = require("path")

// console.log(path.basename("myfile.txt"))
// console.log("directory name ",__dirname)
// console.log("full path ",path.resolve(__dirname,"myfile.txt"))

// using package moment

// const moment = require("moment")

// console.log("current data and time: ", moment().format("DD-MM-YY HH:mm:ss"))

// using package FS

// const fs = require("fs")

// // fs.writeFile("myfile.txt", "HElllo World!!!", (err) => {
// //   console.log(err || "File written successfully!")
// // })

// fs.readFile('myfile.txt','utf8',(err,data)=>
// {
//     console.log(err || "File Content:",data)
// })


const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://trupti4267_db_user:Trupti26@trupti.ultucjj.mongodb.net/department", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const studentSchema = new mongoose.Schema({
    name: String,
    department: String,
    startYear: Number,
    endYear: Number,
    address: String
})

const Student = mongoose.model("Student",studentSchema)

console.log("MongoDB connected successfully")

const student = new Student({
    name: "Trupti Padia",
    department: "Computer Science",
    startYear: 2020,
    endYear: 2024,
    enrollment: 123456,
    address: "XYZ, Rajkot"
})

student.save().then(() => {console.log("Student saved successfully")}).catch((error => {console.error("Error Saving student:",error)}))