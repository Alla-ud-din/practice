"use strict";
/*Q.You just found a bigger dinner table, so now more space is available.
Think of three more guests to invite to dinner.
• Start with your program from Exercise 15.
Add a print statement to the end of your program informing people
that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.*/
//three people for dinner
let guestList = ["Ali Ahmad", "Muazam", "Izza", "Fakhar"];
console.log("First Invitation:\n");
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}, your presence would make our dinner complete - we'd love for you to join us!`);
}
//one of your guests can’t make the dinner
console.log("Missing of one Guest:\n");
//guest who can’t make it.
console.log(`We regret to inform you that ${guestList[1]} will not be able to join us \n for the event.`);
//replacing the name of the guest with new guest
guestList.splice(1, 1, "Allauddin");
//New guest list
console.log("Second Invitation:\n");
for (let i = 0; i < guestList.length; i++) {
    console.log(`Hi ${guestList[i]}, come join us for a delicious feast and enjoy an evening of warmth and laughter.`);
}
//Found more space for Dinner
console.log("Great news! We have managed to find a bigger dinner table, so there's more room for everyone to join us and celebrate together.\n");
//one new guest at the beginning
guestList.unshift("Mukaram");
//one new guest in the middle
guestList.splice(2, 0, "Amber");
//one new guest at the end
guestList.push("Hassam");
//New guest list
console.log("Invitation for all guests:\n");
for (let i = 0; i < guestList.length; i++) {
    console.log(`${guestList[i]}, let's gather for an unforgettable evening of good food and great company!`);
}
