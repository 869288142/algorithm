var path = require('path')
let fs = require('fs')
let { sep } = path
function dfs(dir) {
  let stack = []
  let result = []
  // let startPoint = fs.readdirSync(path)
  stack.push(dir)
  result.push(dir)
  while (stack.length > 0) {
    let point = stack[0]
    stack.shift()
    if(point.includes("git")){
      continue
    }
    let stat = fs.statSync(point)
    if (stat.isFile()) {
      result.push(point)
    }
    if (stat.isDirectory()) {
      console.log(point);
      let files = fs.readdirSync(point)
      for (let node of files) {
        var filedir = path.join(point, node)
        let stat = fs.statSync(filedir)
        if(stat.isDirectory()) {
          stack.push(filedir)
        }else {
          result.push(node)
        }
      }
    }
  }
  return result
}
console.log(dfs(path.resolve('.')))