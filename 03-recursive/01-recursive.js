const arr1 = [1, 2, 3, 4, 5];
const arr2 = [0, 3, 1, 10, 22];

function sumOfArray(arr) {
    if (arr.length === 0){
        return 0;
    }
    // arr.shift()
    // console.log(arr)
    // return arr[0] + sumOfArray(arr) ;

    let xx = arr.slice(1) // terkahir jadi array kosong makanya bisa masuk ke if yang pertama
 // let yy = arr.shift()
    // console.log(xx)
    return arr[0] + sumOfArray(xx);
}   


console.log(sumOfArray(arr1));
console.log(sumOfArray(arr2));

//nomor ke 2
const avg1 = sumOfArray(arr1) / arr1.length;
const avg2 = sumOfArray(arr2) / arr2.length;

let h = 0
function countAboveAvg(arr, avg) {
    if (arr.length === 0) { // string jadi "" dan angka bakal jadi 0, base return nya jadi penting
        return 0;
    }
    if (arr[0] > avg) {
        h = 1;
    }
    else{
      h = 0
    }
    
    return h + countAboveAvg(arr.slice(1), avg);
}

const totalAboveAvg1 = countAboveAvg(arr1, avg1);
const totalAboveAvg2 = countAboveAvg(arr2, avg2);

console.log(totalAboveAvg1);
console.log(totalAboveAvg2);

//nomor ke 3
const arr = [1, 2, 3, 4, 5];
function searchInArray(arr, number) {
    let panjangArr = arr.length
    let x = 0
    if (arr[x] === number) {
        return "angka ditemukan pada index: "+(arr[x] - 1);
    }
    else if (panjangArr === 0) {
        return "angka tidak ditemukan";
    }
    console.log(arr)
    return searchInArray(arr.slice(1), number); // motong awal dari arr, terus lanjut aja
}

console.log(searchInArray(arr, 6));
console.log(searchInArray(arr, 1));
console.log(searchInArray(arr, 8));

//nomor ke 4
function trianglePattern(x, y) {
    if (x === 0) {
        return
    }
    let spasiBuatSegitiga = ""; // kasih dulu aja string kosong, 
    for (let i = 0; i < y; i++) {
        if (i < x - 1) {
            spasiBuatSegitiga += " "  // baru tambahin, max nya ambil dari y, jangan " " += spasiBuatSegitiga, kan niatnya mau dibalik
        } 
        else {
            spasiBuatSegitiga += String.fromCharCode(64 + (y - x + (i - x) + 2))
        }
    }
    console.log(space)
    trianglePattern(x - 1, y)
}

trianglePattern(5, 5)