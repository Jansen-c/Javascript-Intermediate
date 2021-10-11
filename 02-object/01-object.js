const person = {
    name: "person A",
    age: 100,
    favDrinks: [
      "coffee",
      "jamu temulawak",
      "tea"
    ],
    greeting: function(string) {
      return (`Hello, ` + string)
      // kalo console.log aja gada return bakal undefined
    }
  }
  
  /// EDIT HERE
  person.name = "jansen"
  person.favDrinks[1] = "tap water"
  
  /// STOP
  
  console.log(person.name);
  console.log(person.age);
  console.log(person.favDrinks);
  console.log(person.greeting("John Watson"));


  
  