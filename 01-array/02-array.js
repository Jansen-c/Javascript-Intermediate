const arr1 = [1, 3, 4, 1, 2, 8];
const arr2 = [5, 6, 7, 8, 1, 3];

let x = 0
function getAverage(value) {
  let hasil = value.reduce((total, value) => {
   x = total + value;
  return x
  }, 0); 
  
  let k = 0

  value.forEach(index =>{
    if (index > (x/value.length)){
      k++ 
    }
  })

  return k 
}

console.log(getAverage(arr1))
console.log(getAverage(arr2))