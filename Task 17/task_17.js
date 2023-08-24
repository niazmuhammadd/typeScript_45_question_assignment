/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/
var guest_List = ["Kamran", "Irfan", "Arsalan"];
guest_List.unshift("Yaseen");
guest_List.splice(2, 0, "Hamza", "Niaz Muhammad");
var new_message = "Please come for the lunch\n";
console.log(guest_List);
console.log("You can invited only two people for dinner");
guest_List.pop();
guest_List.pop();
guest_List.pop();
guest_List.pop();
console.log(guest_List);
var still_invited = "You are still invited for the dinner so come on time";
console.log("".concat(guest_List[0], " ").concat(still_invited));
console.log("".concat(guest_List[1], " ").concat(still_invited));
guest_List.pop();
guest_List.pop();
console.log("The elements in the list is ", guest_List);
