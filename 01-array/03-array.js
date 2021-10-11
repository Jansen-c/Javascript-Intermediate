const arr = [
    [10],
    [9, 7, 1],
    [2, 8],
  ];
  
  let output = [];
  function searchInArray(value,nilai) {
    value.forEach((baris) => {
    baris.forEach((kolom) => {
      output.push(kolom);});
    });
  
    function checkApakahAda(val) {
      if (val == nilai){
        return true
      }
      else{
        return false
      }
    }
    let k = output.find(checkApakahAda)
    return output.indexOf(k) 
  // console.log(output)
  // return k
  }
  
  console.log(searchInArray(arr, 3));
  console.log(searchInArray(arr, 2));
  console.log(searchInArray(arr, 4));
  console.log(searchInArray(arr, 8));