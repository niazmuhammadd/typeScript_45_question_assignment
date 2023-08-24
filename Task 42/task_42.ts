/*
Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
*/

function show_great(name_of_megician: any): void {
  for (let i = 0; i < name_of_megician.length; i++) {
    name_of_megician[i] = " Great " + name_of_megician[i];
  }
}

function show_name(name_of_megician: any) {
  for (let elements of name_of_megician) {
    console.log(elements);
  }
}

let name_of_megician: any[] = [
  "Nastoor",
  "Ibni Nastoor",
  "Zakota",
  "Hamoon",
  "Saamri",
];
show_great(name_of_megician);
show_name(name_of_megician);
