/**
 *  队列的ADT
 * @interface QueueInf
 */
interface QueueInf {
  /**
   * 进入队列
   * @param {*} e 进入队列的元素
   */
  add(e: any): void
  /**
   * 删除对头的元素
   */
  remove(): void
}
/**
 * 队列ADT的数组实现
 * @class Queue
 * @implements {QueueInf}
 */
class Queue implements QueueInf {
  arr : any [] = []
  add(e: any) {
    this.arr.push(e)
  }
  remove() {
    return this.arr.shift()
  }
  front() {
    return this.arr[0]
  }
  isEmpty() {
    return this.arr.length === 0
  }
  size() {
    return this.arr.length
  }
  print() {
    console.log(this.arr)
  }
}
