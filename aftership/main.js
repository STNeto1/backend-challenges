const axios = require('axios')

const BASE_URL = 'https://api.exchangeratesapi.io/'

const getExchage = async ({ symbols, base, date }) => {
  try {
    let url = `${BASE_URL}${date !== undefined ? date : 'latest'}`

    if (base) {
      url += `?base=${base}`
    }

    if (symbols) {
      url += `${url.includes('?') ? '&' : '?'}symbols=${symbols.join(',')}`
    }

    return (await axios.default.get(url)).data
  } catch (error) {
    console.log(error)
  }
}

getExchage({
  date: '2019-01-02',
  base: 'USD',
  symbols: ['CAD', 'BRL'],
})

getExchage({
  base: 'USD',
  symbols: ['CAD', 'BRL'],
})
