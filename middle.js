const middle = arr => {
  const output = []
  if (arr.length <= 2) {
    output
  } else if (arr.length % 2 === 0) {
    output.push(arr[arr.length / 2 - 1], arr[arr.length / 2])
  } else {
    output.push(arr[(arr.length - 1)/ 2])
  }
  return output
}

module.exports = middle