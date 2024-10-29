/*Q. Think of at least three different animals that have a common characteristic. 
Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. 
You could print a sentence such as Any of these animals would make a great pet!*/
let animals = ["dog", "cat", "rabbit"];
for (let i = 0; i < animals.length; i++) {
  if (animals[i] === "dog") {
    console.log("A dog would make a loyal companion.");
  } else if (animals[i] === "cat") {
    console.log("A cat would bring a sense of independence to your home.");
  } else if (animals[i] === "rabbit") {
    console.log("A rabbit would be an adorable and low-maintenance pet.");
  } else {
    console.log("This animal is not recognized.");
  }
}
console.log("Any of these animals would make a great pet!");
