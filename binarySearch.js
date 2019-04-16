// 二分查找 要默认升序

//算法步骤
// 1 找到中间值
// 2 中间值是key,返回
// 3 如果搜索值比中间值小, 在左边数组寻找
// 4 如果搜索值比中间值大，在右边数组寻找
// 5 迭代 2-4 直到条件不满足(边界条件)

// 中间值取整方式决定了是重复元素中第一个index还是最后一个index
function binarySearch(arr, key) {
  let left = 0
  let right = arr.length - 1
  while (left <= right) {
    // 向下取整，得到最小的index
    let mid = Math.ceil((left + right) / 2 )
    if(arr[mid] === key) {
      return mid
    }else if(arr[mid] > key) {
      right = mid - 1
    }else if(arr[mid] < key) {
      left = mid + 1
    } 
  }
  return -1
}

let arr = [1, 2, 4, 3, 4,4]
let index = binarySearch(arr, 4)
console.log(index)