/*
Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
*/


function magician_names(arr:string)
{
    for(let elements of arr){
        console.log(elements);
    }
}

let arr:string[]= ['Nastoor', 'Ibni Nastoor', 'Zakota', 'Hamoon', 'Saamri']
console.log(arr);
