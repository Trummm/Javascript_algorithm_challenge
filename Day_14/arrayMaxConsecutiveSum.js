const arrayMaxConsecutiveSum = (arr, k) => {
  var max = arr.slice(0, k).reduce((a, b) => a + b)
  var cur = max
  for (var i = k; i < arr.length; i++) {
    cur += arr[i] - arr[i - k]
    if (cur > max) {
      max = cur
    }
  }

  return max
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2))
