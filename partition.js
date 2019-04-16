// 划分 ---> 将数据以某个点划分为两部分,返回划分店
// 思路
// 1. 左指针找到比枢纽大的值
// 2. 右指针找到比枢纽下的值
// 3. 交换两者
// 4. 重复1-3，直到两个指针交叉
function swap(arr, a, b) {
  ;[arr[a], arr[b]] = [arr[b], arr[a]]
}

function partition(arr, left, right, pivot) {
  let leftPtr = left - 1
  let rightPtr = right + 1
  while (true) {
    while (arr[++leftPtr] < pivot);
    while (rightPtr > 0 && arr[--rightPtr] > pivot);
    if (leftPtr >= rightPtr) {
      break
    } else {
      swap(arr, leftPtr, rightPtr)
    }
  }
  return leftPtr
}
let arr = [6, 5, 4, 3]
console.log(partition(arr, 1, 2, 44 ));
exports.partition = partition
