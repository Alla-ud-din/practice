"use strict";
/*Q.  If you could invite anyone, living or deceased, to dinner, who would you invite?
Make a list that includes at least three people you’d like to invite to dinner.
Then use your list to print a message to each person, inviting them to dinner.*/
let guestList = ["Ali", "Muazam", "Mukaram"];
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}, your presence would make our dinner complete - we'd love for you to join us!`);
}
