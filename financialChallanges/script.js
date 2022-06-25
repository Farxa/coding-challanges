/**Challenge #1: Class Moving Avarage

This is a test to implement a class that provides us the Moving Average for the latest N elements.

Moving Average
Average definition:

The result you get by adding two or more amounts together and dividing the total by the number of amounts.
Source: Cambridge

In this problem, we want you to implement a Moving Average algorithm.

A moving average algorithm is an algorithm that receives a positive integer X and return the average compared to the N latest numbers.

Constraints
N can be any number from 0 to 999999

0 < N < 999999

X can be any number from 0 to 9999999999

0 < X < 9999999999

Examples
MovingAverage(3)
add(3) == 3.0
add(4) == 3.5
add(5) == 4.0
add(4) == 4.333333333333333
MovingAverage(2)
add(3) == 3.0
add(4) == 3.5
add(5) == 4.5
add(6) == 5.5
MovingAverage(1)
add(3) == 3.0
add(4) == 4.0
add(5) == 5.0
add(6) == 6.0


Task & Objectives


You must implement the logic for calling the MovingAverage class and the add method, which will return the moving average of the latest N elements added.
 */

class MovingAverage {
    constructor(N) {
      this.N = N;
      this.arr = []
    }
    
    add(number) {
      let sum = 0;
      this.arr.push(number);
      
      let latestNArr = this.arr.slice(-this.N)
      
     for (let i = 0; i < latestNArr.length; i++ ) {
       sum += latestNArr[i]
       
     } 
      let avarage = sum / latestNArr.length
      return avarage
    }
    
  }

  
  /**Challenge #2: identify invalid transactions


Context
In order to protect our customers we need to identify invalid transactions, a transaction is invalid if:

The amout exceeds $2000, or;
It occurs within (and including) 60 minutes of another transaction with the same name and the exact same price, or;
It occurs within (and including) 60 minutes of another transaction with the same name in a different city, or;
It occurs at the exact same time of another transaction with the same name.
Task
You are given an array of strings transaction where transactions[i] consists of comma-separated values representing the name, time (in minutes), amount, and city of the transaction.
Return a list of transactions that are possibly invalid. You may return the answer in any order.

Example 1
Input: transactions = ["john,20,800,stockholm","john,50,100,beijing"]
Output: ["john,20,800,stockholm","john,50,100,beijing"]
Explanation : The first transaction is invalid because the second transaction occurs within a difference of 60 minutes, has the same name and is in a different city. Similarly the second one is invalid too.

Example 2
Input: transactions = ["john,20,200,stockholm","john,50,200,stockholm"]
Output: ["john,20,200,stockholm","john,50,200,stockholm"]
Explanation : The first transaction is invalid because the second transaction occurs within a difference of 60 minutes, has the same name and the same price. Similarly the second one is invalid too.

Example 3
Input: transactions = ["john,20,150,stockholm","john,20,300,stockholm"]
Output: ["john,20,150,stockholm","john,20,300,stockholm"]
Explanation : The first transaction is invalid because the second transaction occurs at the exact same time and has the same name.

Example 4
Input: transactions = ["john,20,150,stockholm","john,30,300,stockholm"]
Output: []
Explanation : Both transactions are valid.
 */

function identifyInvalidTransactions(transactions) {
    let invalidTransactions = [];
    let transactionsArr = [];
    
    for (let i = 0; i < transactions.length; i++) { 
     transactionsArr.push(transactions[i].split(","))
  }
    
    for (let i = 0; i < transactionsArr.length; i ++) {
       if (+(transactionsArr[i][2]) > 2000 ) {
          invalidTransactions.push(transactionsArr[i].join(","))
        } 
      for (let j = 0; j < transactions.length; j++) {
        if (i === j) continue; 
       
        
        else if (transactionsArr[i][0] === transactionsArr[j][0] && Math.abs(+(transactionsArr[i][1]) - +(transactionsArr[j][1])) <= 60 && transactionsArr[i][2] === transactionsArr[j][2]) {
          if (!invalidTransactions.includes(transactionsArr[i].join(",")))invalidTransactions.push(transactionsArr[i].join(","))
        }
        
        else if (transactionsArr[i][0] === transactionsArr[j][0] && Math.abs(+(transactionsArr[i][1]) - +(transactionsArr[j][1])) <= 60 && transactionsArr[i][3] !== transactionsArr[j][3]) {
    if (!invalidTransactions.includes(transactionsArr[i].join(",")))invalidTransactions.push(transactionsArr[i].join(","))      }
        
        
        else if (transactionsArr[i][0] === transactionsArr[j][0] && transactionsArr[i][1] === transactionsArr[j][1]) {
    if (!invalidTransactions.includes(transactionsArr[i].join(",")))invalidTransactions.push(transactionsArr[i].join(","))      }
      }
    }
    console.log(transactions, invalidTransactions)
    return invalidTransactions
  }
  