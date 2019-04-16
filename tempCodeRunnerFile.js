
function quickSort(arr) {
  if(arr.length < 2) {
    return arr.slice()
  }
  let pivot = arr[Math.floor(Math.random() *  arr.length )]
  let left = []
  let middle = []
  let right = []
  for(let i = 0; i < arr.length; i++) {
    let v = arr[i]
    if(v < pivot) {
      left.push(v)
    }
    if(v === pivot) {
      middle.push(v)
    }
    if( v > pivot) {
      right.push(v)
    }
  }
  return quickSort(left).concat(middle, quickSort(right))
}