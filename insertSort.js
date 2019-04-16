// 插入排序

// 思路
// 1. 找到一个元素
// 2. 将其移动到现有队列的第一个大于他的元素的前面


// function insertSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let tmp = arr[i] 
//     let j  = i - 1
//     // 这里必须判断加上等号，以保留插入排序的稳定性
//     while( j >= 0 && arr[j] >= tmp ) {
//       arr[ j + 1 ] = arr[ j ]
//       j--
//     }
//     arr[j + 1] = tmp
//   }
//   return arr
// } 

function insertSort(arr) {
  for(let i = 1; i < arr.length; i++) {
    // 取出当前位置的值，跟前面的比较，如果比当前值大，则位置后移
    let cur = i
    let tmp = arr[i]
    for(let j = i - 1; j >= 0;  j--) {
      if(tmp < arr[j]) {
        arr[ j + 1] = arr[j] 
        cur--
      } 
    }
    arr[cur] = tmp
  }
  return arr
}


let arr = [6, 5, 4, 3]

console.log(insertSort(arr))