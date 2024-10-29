/*Q.You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. 
You’ll have to think of someone else to invite.

• Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.*/
let guestList = ["Ali Ahmad", "Muazam", "Mukaram", "Fakhar"];
console.log("First Invitation:\n")
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}, your presence would make our dinner complete - we'd love for you to join us!\n`)
// Print a personalized invitation message for each guest in the guestList array
}
console.log("One Guest can't join.\n");

console.log(`We regret to inform you that ${guestList[1]} will not be able to join us for the event.\n`)
// Print a message informing that a specific guest will not be able to attend
guestList.splice(1,1,"Allauddin")
// Replace the name of the missing guest with a new guest name at the same index
console.log("Second Invitation:\n")
for (let i = 0; i < guestList.length; i++) {
    console.log(`Hi ${guestList[i]}, come join us for a delicious feast and enjoy an evening of warmth and laughter.\n`)
// Print a new invitation message for each guest in the updated guestList array
}
