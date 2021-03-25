
let combo = function(arr, num) {
    let result = [];

    let range = function(temp, arr) {
      if (temp.length == num) {
        result.push(temp)
      } else {
        for (let i = 0;  i <= arr.length - num + temp.length ; i++) {
          range(temp.concat(arr[i]), arr.slice(i + 1))
        }
      }
    }
    
    range([], arr);

    return result
}