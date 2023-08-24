/*
Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.z
*/
var guest_List = ["Kamran", "Irfan", "Arsalan"];
var invitation = "Please come if you free then I invited you for dinner today";
console.log("".concat(guest_List[0], ", ").concat(invitation));
console.log("".concat(guest_List[1], ", ").concat(invitation));
console.log("".concat(guest_List[2], ", ").concat(invitation));
console.log("Arsalan is not come for the dinner");
guest_List.splice(2, 1, "Ahmad");
console.log("The New Array list is");
console.log(guest_List);
