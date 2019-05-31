// BFS -> Breadth First Search -> 广度优先搜索
// 算法思想
// 遍历一层所有节点然后再按照当前顺序再遍历对应的子节点
let graph = {
  'A':['B','C'],
  'B':['A','C','D'],
  'C':['A','D','E'],
  'D':['B','C','E'],
  'E':['C','D','F'],
  'F':['E']
}

function bfs(graph,startPoint){
  let queue = [];
  let result = []

  queue.push(startPoint);
  result.push(startPoint);
  // 取出队中的节点
  while(queue.length>0){
      let point = queue.shift();
      let nodes = graph[point];
      // 遍历子节点
      for(let node of nodes){
          if(result.includes(node)) continue;
          result.push(node);
          queue.push(node);
      }
  }
  return result

}

console.log(bfs(graph, 'A'));
