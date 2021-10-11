const arr = [1, 2, 3];
const arr2 = [8, 1, 5, 7];
// function reverse(value) {
//   return value.reverse()
// }

function reverse(value){
  // let reversedNumbers = [...value].reverse();
  // return reversedNumbers
  let output = value.map(item => { return item})
  return output.reverse()
}

const newArr = reverse(arr);
const newArr2 = reverse(arr2);

console.log(arr, newArr);
console.log(arr2, newArr2);