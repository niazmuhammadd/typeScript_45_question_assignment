/*
No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.
*/
var arr = ['Muhammad', 'Yaseen', 'Hamza'];
arr.pop();
arr.pop();
arr.pop();
// console.log(arr);
if (arr.length == 0) {
    console.log("We find some user");
}
else {
    console.log("The list is enough");
}
