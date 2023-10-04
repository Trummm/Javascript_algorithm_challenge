const alternatingSums = (arr) => {
  let resultArr = [0, 0]

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      resultArr[0] += arr[i]
      console.log(resultArr)
    } else {
      resultArr[1] += arr[i]
      console.log(resultArr)
    }
  }

  return resultArr
}

