function perm(arr, k= 0, m = arr.length - 1) {
  if (k === m) {
    console.log(arr)
  } else {
    for (let i = k; i <= m; i++) {
      swap(arr, k, i)
      perm(arr, k + 1, m)
      swap(arr, k, i)
    }
  }
  function swap(arr, a, b) {
    ;[arr[a], arr[b]] = [arr[b], arr[a]]
  }
}
perm([1, 2, 3, 4])