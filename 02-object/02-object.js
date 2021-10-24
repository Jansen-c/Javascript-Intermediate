function getObjectValue(object,string) {
    let x = string.split(".")
    var chunk =[]
    // console.log(x)
    let y = x.length 
    for (let i=0 ; i< y ;i++) { /* Buat dari ['a','b','c'] jadi [['a'],['b'],['c']] */
      chunk[i] = x.splice(0,1)
    }
    // console.log(chunk)
    let xx = object[chunk[0]][chunk[1]][chunk[2]]
    if(xx == undefined){
      return xx = null;
    }
    return (xx)
  }
  
  const milkBasedCoffee = {
    name: "latte",
    ingredients: {
      espresso: {
        origin: "lampung",
        roastProfile: "medium to dark",
        ratio: 1
      },
      milk: {
        brand: "susu murni",
        isVegan: false,
        ratio: 5
      }
    },
  }
  
  // // console.log(milkBasedCoffee["ingredients"]["espresso"]["origin"])
  const espresso = getObjectValue(milkBasedCoffee, "ingredients.espresso.origin");
  const coffeeBrand = getObjectValue(milkBasedCoffee, "ingredients.espresso.brand");
  const isMilkVegan = getObjectValue(milkBasedCoffee, "ingredients.milk.isVegan");
  
  console.log(espresso);
  console.log(coffeeBrand);
  console.log(isMilkVegan)