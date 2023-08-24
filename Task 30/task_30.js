/*
Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
*/
var members = ["Admin", "Dost Muhammad", "Muhammad Yaseen", "Muhammad Hamza", "Niaz Muhammad"];
for (var _i = 0, members_1 = members; _i < members_1.length; _i++) {
    var member = members_1[_i];
    if (member == 'admin') {
        console.log("'Hello' ".concat(member, ", would you like to see a status report?"));
    }
    else {
        console.log("'Hello' ".concat(member, " thank you for logging in again"));
    }
}
