const { isPrime, genFactorial, matchType } = require('./utils')

// Question 1
const listofPrimes = (n) => {
  const result = []

  for (let i = 0; i <= n; i++) {
    if (isPrime(i)) result.push(i)
  }

  return result
}

// Question 2
const listOfFactorials = (n) => {
  const result = []
  for (let i = 0; i <= n; i++) {
    result.push(genFactorial(i))
  }
  return result
}

// Question3
const patternMatching = (l) => {
  l.forEach((val) => {
    console.log(matchType(val))
  })
}

// Question 4
// works? kind of
const regexQuestion = (s) => {
  const reg = /([1-9])/g
  return reg.test(s)
}

// Question 5
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  setAge(num) {
    return new Promise((resolve, reject) => {
      if (num > 0) {
        this.age = num
        resolve(true)
      }

      reject("Age can't be negative")
    })
  }

  toString() {
    return `${this.name} | ${this.age}`
  }
}

const p1 = new Person('Germano', 20)

p1.setAge(-1)
  .then(() => {
    console.log('set age')
  })
  .catch((err) => {
    console.log(err)
  })
