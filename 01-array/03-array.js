const arr = [
    [10],
    [9, 7, 1],
    [2, 8],
  ];
  
  let arrayKosong = []
  function searchInArray(value, nilai) {  
    let dataBaru = arrayKosong.concat(...value)

    for(let i = 0; i < dataBaru.length; i++){
        if(dataBaru[i] == nilai)
            return i }
    return null}

console.log(searchInArray(arr, 3));
console.log(searchInArray(arr, 2));
console.log(searchInArray(arr, 4));
console.log(searchInArray(arr, 8));

