const adjacentElementsProduct = (arr) => {
  return Math.max(
    ...arr
      .map((el, i) => [el, arr[(i + 1) % arr.length]])
      .slice(0, -1)
      .map(([a, b]) => a * b)
  )
}

console.log(adjacentElementsProduct([1, 2, 3, -5, 7, 8]))
