/*
Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
*/
function describe_cities(city) {
    var country = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        country[_i - 1] = arguments[_i];
    }
    console.log("".concat(city, " ").concat(country));
}
describe_cities("Karachi", "Pakistan");
describe_cities("Dehli", "India");
describe_cities("Iceland");
