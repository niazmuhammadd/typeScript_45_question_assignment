/*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.*/
var guest_List = ["Kamran", "Irfan", "Arsalan"];
guest_List.unshift("Yaseen");
guest_List.splice(2, 0, "Hamza", "Niaz Muhammad");
var new_message = "Please come for the lunch\n";
console.log(guest_List);
console.log("".concat(guest_List[0], " ").concat(new_message));
console.log("".concat(guest_List[1], " ").concat(new_message));
console.log("".concat(guest_List[2], " ").concat(new_message));
console.log("".concat(guest_List[3], " ").concat(new_message));
console.log("".concat(guest_List[4], " ").concat(new_message));
console.log("".concat(guest_List[5], " ").concat(new_message));
