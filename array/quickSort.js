// 快速排序
//  思路
//  1. 取一个枢纽
//  2. 按照枢纽划分数组，接下来分别对枢纽分割的两部分进行划分
//  3. 只有一个元素时停止

// 能用

// function quickSort(arr) {
//   if(arr.length < 2) {
//     return arr.slice()
//   }
//   let pivot = arr[Math.floor(Math.random() *  arr.length )]
//   let left = []
//   let middle = []
//   let right = []
//   for(let i = 0; i < arr.length; i++) {
//     let v = arr[i]
//     if(v < pivot) {
//       left.push(v)
//     }
//     if(v === pivot) {
//       middle.push(v)
//     }
//     if( v > pivot) {
//       right.push(v)
//     }
//   }
//   return quickSort(left).concat(middle, quickSort(right))
// }

// JAVA数据结构与算法 javascript版本
function swap(arr, a, b) {
  ;[arr[a], arr[b]] = [arr[b], arr[a]]
}
// 划分
function partition(arr, left, right, pivot) {
  // 由于三项取中策略，可以跳过left、right的排序
  // console.log('pivot', pivot)
  let leftPtr = left - 1 
  let rightPtr = right 
  while (true) {
    while (arr[++leftPtr] < pivot);
    // while (arr[--rightPtr] > pivot);
    while (arr[--rightPtr] > pivot);
    if (leftPtr >= rightPtr) {
      break
    } else {
      swap(arr, leftPtr, rightPtr)
    }
  }
  console.log('partition', arr.slice(left, right + 1), 'pivot', pivot)
  // 枢纽移动到右边子数组的最左端
  // swap(arr, leftPtr, right)
  swap(arr, leftPtr, right )
  console.log('order', arr)
  // console.log(leftPtr)
  return leftPtr
}

// 主入口
function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left >= right) {
      return
  } else {
    let pivot = arr[right]
    let partitionIndex = partition(arr, left, right, pivot)
    quickSort(arr, left, partitionIndex - 1)
    quickSort(arr, partitionIndex + 1, right)
  }
}
// 三项数据取中避免边界检测，以及可以去掉对left、right的划分，因为它们已经是有序的
function medianOf3(arr, left, right) {
  // 对center丢弃小数部分
  let center = (left + right) / 2
  center = parseInt(center)
  // 保证三者 递增
  if (arr[left] > arr[center]) swap(arr, left, center)
  if (arr[left] > arr[right]) swap(arr, left, right)
  if (arr[center] > arr[right]) swap(arr, center, right)
  // 把枢纽放置在右端
  swap(arr, center, right - 1)
  return arr[right - 1]
}

function manualSort(arr, left, right) {
  let size = right - left + 1
  if (size <= 1) {
    return
  }
  if (size === 2) {
    if (arr[left] > arr[right]) {
      swap(left, right)
    }
  }else {
    if (arr[left] > arr[right - 1]) swap(arr, left, right - 1)
    if (arr[left] > arr[right]) swap(arr, left, right)
    if (arr[right - 1] > arr[right]) swap(arr, right - 1, right)
  }
}

// let arr = []
// for(let i = 0; i< 20; i++) {
//   let e =  Math.floor(Math.random()*110)
//   arr.push(e)
// }
let arr = [
  3,
  3,
  14,
  53,
  65,
  69,
  12,
  0,
  2,
  2,
  4,
  21,
  14,
  65,
  22,
  55,
  56,
  90,
  91,
  107
]

// arr.sort(arr)\
quickSort(arr)
console.log(arr)
