// 给定的如下json转换为一颗父子树
let list = [
  { id: 1, name: '部门A', parentId: 0 },
  { id: 2, name: '部门B', parentId: 0 },
  { id: 3, name: '部门C', parentId: 1 },
  { id: 4, name: '部门D', parentId: 1 },
  { id: 5, name: '部门E', parentId: 2 },
  { id: 6, name: '部门F', parentId: 3 },
  { id: 7, name: '部门G', parentId: 2 },
  { id: 8, name: '部门H', parentId: 4 }
]
/**
 *
 * @param {Array} data
 */
function convert(data) {
  let result = []
  const map = data.reduce((res, item) => ((res[item.id] = item), res), {})
  data.forEach(item => {
    if (item.parentId !== 0) {
      map[item.parentId].children ? map[item.parentId].children.push(item) : (map[item.parentId].children = [item])
    } else { 
      result.push(item)
    }
  })
  return result
}
console.log(convert(list));
// 递归
function convert(source, parentId = 0){
  let trees = [];
  for(let item of source) {
    if( item.parentId === parentId)
		{
      let children = convert(source, item.id)
      if(children.length) {
        item.children =  children 
      }
      trees.push(item);
		}
  }
	return trees;
}