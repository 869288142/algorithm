// 二分查找 
//    前提： 
//        有序,降序或者升序都可以
//    算法步骤：
//        1 计算划分坐标，获取中间值
//        2 中间值是key,返回
//        3 如果搜索值比中间值小, 在左边数组寻找
//        4 如果搜索值比中间值大，在右边数组寻找
//        5 迭代 2-4 直到条件不满足(边界条件)

// 疑问
// 搜索区间学习

function binarySearch(arr, key) {
  let left = 0
  let right = arr.length - 1
  while (left <= right) {
    // Edge Case 1 : 
    // (left + right) / 2 表达式会出现left + right 溢出整数范围，导致结果错误
    // 使用left + ((right - left) / 2)  代替,可以考虑用位运算加速
    let mid = Math.ceil((left + ((right - left) >> 1) ))
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



function binarySearch(arr, key) {
  let left = 0
  let right = arr.length
  while (left < right) {
    // Edge Case 1 : 
    // (left + right) / 2 表达式会出现left + right 溢出整数范围，导致结果错误
    // 使用left + ((right - left) / 2)  代替,可以考虑用位运算加速
    let mid = Math.ceil((left + ((right - left) >> 1) ))
    if(arr[mid] === key) {
      // 缩短左区间
      right = mid;
    }else if(arr[mid] > key) {
      // 区间划分为[left, mid)
      right = mid 
    }else if(arr[mid] < key) {
      left = mid + 1
    } 
  }

  // target 比所有数都大
  if (left == nums.length) return -1;
  // 类似之前算法的处理方式
  return nums[left] == target ? left : -1;
}


function binarySearch(arr, key) {
  let left = 0
  let right = arr.length
  while (left < right) {
    // Edge Case 1 : 
    // (left + right) / 2 表达式会出现left + right 溢出整数范围，导致结果错误
    // 使用left + ((right - left) / 2)  代替,可以考虑用位运算加速
    let mid = Math.ceil((left + ((right - left) >> 1) ))
    
    if(arr[mid] === key) {
      // 缩短右区间
      left = mid + 1
    }else if(arr[mid] > key) {
      // 区间划分为[left, mid)
      right = mid 
    }else if(arr[mid] < key) {
      left = mid + 1
    }
    
  }

  if (right == 0) return -1;
  return nums[right - 1] == target ? (right - 1) : -1;
}

let arr = [1, 1, 3, 3, 3]
let index = binarySearch(arr, 3)
console.log(index)

