
function perm(arr, k= 0, m = arr.length - 1) {
  let res = []
  backup(arr,k, m, res)
  return res
}

function backup(arr, k= 0, m = arr.length - 1, res = []) {
  if (k === m) {
    res.push([...arr])
  } else {
    for (let i = k; i <= m; i++) {
      swap(arr, k, i)
      backup(arr, k + 1, m, res)
      swap(arr, k, i)
    }
  }
  function swap(arr, a, b) {
    ;[arr[a], arr[b]] = [arr[b], arr[a]]
  }
}



console.log(perm([1,2,3], 1));
