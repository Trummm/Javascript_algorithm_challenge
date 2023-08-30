const addBorder = (arr) => {
  arr = arr.map((f) => '*'.concat(f, '*'))
  arr.unshift(Array(arr[0].length).fill('*').join(''))
  arr.push(Array(arr[0].length).fill('*').join(''))

  return arr
}

console.log(addBorder(['abc', 'ded']))
