/**
 *  栈的ADT
 * @interface StackInf
 */
interface StackInf {
  /**
   *  入栈
   * @param {*} e 入栈元素
   */
  push(e: any) : void 
  /**
   *  出栈 
   * @return {*}  {*}
   */
  pop(): any
}

/**
 *  数组实现栈ADT
 * @class Stack
 * @implements {StackInf}
 */
class Stack implements StackInf {
  arr: any [] = []
  push(e: any) {
    this.arr.push(e)
  }
  pop() {
    return this.arr.pop()
  }
  peek() {
    return this.arr[this.arr.length - 1]
  }
  isEmpty() {
    return this.arr.length === 0
  }
  clear() {
    this.arr = []
  }
  size() {
    return this.arr.length
  }
  print() {
    console.log(this.arr)
  }
}

let stack = new Stack()
stack.push(3)
stack.push(2)
stack.push(1)
stack.pop()
let e = stack.size()
console.log(e)
stack.print()
