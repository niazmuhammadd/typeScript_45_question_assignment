/*
Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
*/

// let current_users:string[]=['kamran','kashif','ahsan','fatima','sajida'];
// let new_users:string[]=['habiba', 'jameela','']

class UsernameChecker {
  private currentUsers: Set<string>;

  constructor(currentUsers: string[]) {
    this.currentUsers = new Set(currentUsers.map((user) => user.toLowerCase()));
  }

  checkNewUsers(newUsers: string[]) {
    for (const newUser of newUsers) {
      const normalizedNewUser = newUser.toLowerCase();
      if (this.currentUsers.has(normalizedNewUser)) {
        console.log(
          `Username '${newUser}' is already taken. Please choose a different username.`
        );
      } else {
        console.log(`Username '${newUser}' is available.`);
        this.currentUsers.add(normalizedNewUser);
      }
    }
  }
}

const currentUsers = ["kamran", "kashif", "ahsan", "fatima", "sajida"];
const newUsers = ["habiba", "jameela","sarah","saira","kashif"];

const usernameChecker = new UsernameChecker(currentUsers);
usernameChecker.checkNewUsers(newUsers);
