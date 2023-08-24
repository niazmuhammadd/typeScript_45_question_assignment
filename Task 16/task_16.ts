/*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.*/


let guest_List = ["Kamran", "Irfan", "Arsalan"];
// let invitation = "Please come if you free then I invited you for dinner today";
// console.log(`${guest_List[0]}, ${invitation}`);
// console.log(`${guest_List[1]}, ${invitation}`);
// console.log(`${guest_List[2]}, ${invitation}`);
// console.log("Arsalan is not come for the dinner");
// guest_List.splice(2,1,"Ahmad");
// console.log("The New Array list is\n")
// console.log(guest_List);
// console.log("\nInviting Three More people \n");
guest_List.unshift("Yaseen");

guest_List.splice(2,0,"Hamza", "Niaz Muhammad");

let new_message = "Please come for the lunch\n";

console.log(guest_List);

console.log(`${guest_List[0]} ${new_message}`)
console.log(`${guest_List[1]} ${new_message}`)
console.log(`${guest_List[2]} ${new_message}`)
console.log(`${guest_List[3]} ${new_message}`)
console.log(`${guest_List[4]} ${new_message}`)
console.log(`${guest_List[5]} ${new_message}`)