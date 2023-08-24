//Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
var arr3 = ["Saudi Arabia", "Switzerland", "Finland", "India", "Japan"];
// • Print your array in its original order.
console.log(arr3);
// • Print your array in alphabetical order without modifying the actual list.
var result3 = arr3.slice().sort();
console.log(result3);
// • Show that your array is still in its original order by printing it.
console.log(arr3);
// • Print your array in reverse alphabetical order without changing the order of the original list.
var order3 = arr3.slice().reverse();
console.log(order3);
// • Show that your array is still in its original order by printing it again.
console.log(arr3);
// • Reverse the order of your list. Print the array to show that its order has changed.
var change_order = arr3.reverse();
console.log(change_order);
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
change_order.reverse();
console.log(change_order);
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
var again_change_order = change_order.slice().sort();
console.log(again_change_order);
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/
var again_reverse_order = again_change_order.slice().reverse();
console.log(again_reverse_order);
