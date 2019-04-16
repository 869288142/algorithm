// 选择排序
// 将交换次数从n2 降低到了n

// 算法思路
// 1.扫描一遍数组，找到最低位，与数组头部数据项进行交换
// 2. 重复步骤1
function swap(arr, a, b) {
  [arr[a], arr[b]] = [arr[b], arr[a]]
}

function selectSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i
    for (let j = i + 1; j < arr.length; j++) {
      arr[j] < arr[min] && (min = j)
    }
    swap(arr, i, min)
  }
  return arr
}

let arr = [6, 5, 4, 3, 2, 1]

console.log(selectSort(arr))