// 线性查找
// 时间复杂度On
// 空间复杂度O1
// 遍历所有元素，返回存在的下标或者-1
function linearSearch(arr, key) {
  let index = -1
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === key) {
      index = i
      break
    }
  }
  return index
}

let arr = [1, 2, 3]
let noIndex = linearSearch(arr, 4)
let index = linearSearch(arr, 2)
console.log(noIndex)
console.log(index)