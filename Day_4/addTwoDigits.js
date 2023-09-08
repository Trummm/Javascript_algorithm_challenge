const addTwoDigits = (number) => {
  const newArr = number.toString().split('')

  const result = newArr.reduce((init, item) => {
    return init + parseInt(item)
  }, 0)

  return result
}
