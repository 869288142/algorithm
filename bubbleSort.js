// 排序算法的基本步骤
// 1.比较两个数据项
// 2.交换两个数据数据项

// 冒泡排序

// 思路
// 1. 从左边索引开始的一个位置，比较相邻的数据项
// 2. 如果左边大，则交换两个数据项的位置
// 3. 一直比较到数组末端
// 4. 索引加一，重复1-3步骤

function swap(arr, a, b) {
  [arr[a], arr[b]] = [arr[b], arr[a]]
}

// function bubbleSort(arr) {
//   for(let i = 0; i < arr.length; i++ ) {
//     for(let j = 0; j < arr.length; j++ ) {
//         if(arr[j] > arr[j+1]) {
//           swap(arr, j, j + 1)
//         }
//     }
//   }
//   return arr
// }

// 现有问题 每轮排序后，数组末端的递增数据项就加一
// 如何利用已有的递增数据项
// 优化方案 每次从0遍历到数组长度-当前循环轮数，极大地利用已排序的数据项

function bubbleSort(arr) {
  for(let i = arr.length - 1; i  ; i--) {
    for(let j = 0; j < i; j++) {
      arr[j] > arr[j + 1] && swap(arr, j, j + 1)
    }
    console.log(i ,arr);
  }
  return arr
} 


let arr = [6, 5, 4, 3, 2, 1]

console.log(bubbleSort(arr))