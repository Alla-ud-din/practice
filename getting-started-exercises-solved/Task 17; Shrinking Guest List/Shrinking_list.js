"use strict";
/*Q.You just found out that your new dinner table won’t arrive in time for the dinner,
and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message
saying that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list.
Each time you pop a name from your list,
print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list,
letting them know they’re still invited.
• Remove the last two names from your list,
so you have an empty list. Print your list to make sure you actually have an empty list
at the end of your program.*/
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
//space for only two guests.
console.log("\n");
console.log("Apologies, but due to space constraints, we can only invite two guests for the dinner.\n");
for (let i = guestList.length; i > 2; i--) {
    console.log(`Sorry to inform you , ${guestList.pop()} , we will not be able to host you this time.`);
}
console.log("\n");
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}, we would like to inform you that, you are still welcome for dinner. `);
}
