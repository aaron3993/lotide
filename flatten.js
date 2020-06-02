const flatten = array => {
  const output = []
  for (let el of array) {
    if (Array.isArray(el)) {
      for (let number of el) {
        output.push(number)
      }
    } else {
      output.push(el)
    }
  }
  return output
}

module.exports = flatten