function dfs(graph,startPoint){
  let stack = [];
  let result = []

  stack.push(startPoint);
  result.push(startPoint);

  while(stack.length>0){
      let point = stack.pop();
      let nodes = graph[point];
      for(let node of nodes){
          if(result.includes(node)) continue;
          result.push(node);
          stack.push(node);
      }


  }
  return result

}
console.log(dfs(graph, 'A'));