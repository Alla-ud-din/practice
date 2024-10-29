/*Q. Working with one of the programs from Exercises 14 through 18, print a message 
indicating the number of people you are inviting to dinner.*/
//three people for dinner
let guestList = ["Ali Ahmad", "Muazam", "Izza", "Fakhar"];
//one of your guests can’t make the dinner
//replacing the name of the guest with new guest
guestList.splice(1,1,"Allauddin")
//Found more space for Dinner
//one new guest at the beginning
guestList.unshift("Mukaram")
//one new guest in the middle
guestList.splice(2,0,"Amber")
//one new guest at the end
guestList.push("Hassam")
//space for only two guests.
for (let i= guestList.length ; i>2 ; i--) {
guestList.pop()
}
console.log("Guests invited for Dinner")
for (let i=0; i<guestList.length; i++){
    console.log(`${i+1}. ${guestList[i]} `)
}
