const isPrime = (n) => {
  let res = true
  for (let i = 2; i <= n / 2; i++) {
    if (n % 2 == 0) {
      res = false
      break
    }
  }
  return res
}

const genFactorial = (n) => {
  let num = 1
  for (let i = 0; i <= n; i++) {
    if (i == 0) {
      num *= 1
      continue
    }

    num *= i
  }
  return num
}

const matchType = (v) => {
  if (typeof v === 'number') {
    return `is a ${Number.isInteger(v) ? 'integer' : 'float'}`
  } else if (typeof v === 'string') {
    return 'is a string'
  } else {
    return `type is ${typeof v}`
  }
}

module.exports = {
  isPrime,
  genFactorial,
  matchType,
}
