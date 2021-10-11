const isR18Plus = (age) => {
    
    const hasilPromise = new Promise((resolutionFunc) => {
    if(age>18) {
        setTimeout(() => {
            resolutionFunc("anda sudah dewasa")   
        }, 1000);}
    else {
        setTimeout(() => {
            resolutionFunc("anda masih dibawah umur") 
        }, 1000);
    }})

return hasilPromise;
}

const printR18Plus = async () => {
  const underAge = await isR18Plus(10);
  const properAge = await isR18Plus(19);

  console.log(underAge);
  console.log(properAge);
}

printR18Plus();