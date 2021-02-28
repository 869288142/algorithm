let arr = []
for (let i = 0; i < 8; i++) {
  let e = Math.floor(Math.random() * 110)
  arr.push(e)
}

// 归并排序
// 利用分治法将问题分解成更小的子问题，然后将子问题结果合并
function mergeSort(
  arr,
  left = 0,
  right = arr.length - 1,
  temp = new Array(arr.length)
) {
  if(left < right) {
    let mid = parseInt(left + (right - left) / 2)
    mergeSort(arr, left, mid, temp)
    mergeSort(arr, mid + 1, right, temp)
    merge(arr, left, mid, right, temp)
  }
}
/**
 * 
 * @param {Array } arr 
 * @param {*} left 
 * @param {*} mid 
 * @param {*} right 
 * @param {*} temp 
 */
function merge(arr, left, mid, right, temp) {
  let i = left
  let j = mid + 1
  let t = 0 //临时数组指针
  console.log("merge", arr.slice(left, right + 1) );
  while (i <= mid && j <= right) {
    if (arr[i] <= arr[j]) {
      temp[t++] = arr[i++]
    } else {
      temp[t++] = arr[j++]
    }
  }
  while (i <= mid) {
    //将左边剩余元素填充进temp中
    temp[t++] = arr[i++]
  }
  while (j <= right) {
    //将右序列剩余元素填充进temp中
    temp[t++] = arr[j++]
  }
  t = 0
  //将temp中的元素全部拷贝到原数组中
  while (left <= right) {
    arr[left++] = temp[t++]
  }
}
mergeSort(arr)
console.log(arr);
