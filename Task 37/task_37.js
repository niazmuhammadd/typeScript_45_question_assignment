/*
Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.*/
function make_shirt(size_of_t_shirt, text_on_t_shirt) {
    console.log("You size is \"".concat(size_of_t_shirt, "\" \"").concat(text_on_t_shirt, "\""));
}
make_shirt("Large", "this is very large size t-shirt");
make_shirt("Medium", "MARVEL log medium t-shirt");
