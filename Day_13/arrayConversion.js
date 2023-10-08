const arrayConversion = (arr) => {
  var newArr = []
  var j = 0
  while (arr.length > 1) {
    newArr = []
    for (let i = 0; i < arr.length; i += 2) {
      newArr.push(arr.slice(i, i + 2))
    }
    arr = newArr.map((pair) => (j ? pair[0] * pair[1] : pair[0] + pair[1]))
    j = (j + 1) % 2
  }

  return arr[0]
}
