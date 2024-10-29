/*Q. Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/
//Store the locations in a array. Make sure the array is not in alphabetical order.
let places = ["Eiffel tower", "Burj Khalifa", "Niagara fall", "Great Wall of China", "Taj Mahal"];
//Print your array in its original order.
console.log("Original order")
console.log (places);
//Print your array in alphabetical order without modifying the actual list.
let sortedList = [...places]
sortedList.sort()
console.log("Alphabetical order")
console.log(sortedList)
//Show that your array is still in its original order by printing it.
console.log("Again Original order")
console.log(places)
//Print your array in reverse alphabetical order without changing the order of the original list.
sortedList.reverse()
console.log("reverse alphabetical order")
console.log(sortedList)
//Show that your array is still in its original order by printing it again.
console.log("Again Original order")
console.log(places)
//Reverse the order of your list. Print the array to show that its order has changed.
places.reverse()
console.log("Reverse of Original order")
console.log(places)
//Reverse the order of your list again. Print the list to show it’s back to its original order.
places.reverse()
console.log("Again Original order")
console.log(places)
//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
places.sort()
console.log("Sorted Original order")
console.log(places)
//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
places.reverse()
console.log("Reversed Original order")
console.log(places)