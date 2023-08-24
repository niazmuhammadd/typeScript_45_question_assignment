/*
Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
*/
function make_album(artist, title, track) {
    var album = {
        artist_name: artist,
        title: title
    };
    if (track !== undefined) {
        album.tracks = track;
    }
    return album;
}
var album1 = make_album("Nusrat Fateh Ali Khan", "Kamli Walay", 200);
var album2 = make_album("Rahat Fateh Ali Khan", "Mast Mast", 100);
var album3 = make_album("Chahat Fateh Ali Khan", "Dil Dil");
console.log(album1);
console.log(album2);
console.log(album3);
/*
function make_Album(artist: string,title: string,tracks?: number): Record<string, any> {
  let album: Record<string, any> = {
    artist: artist,
    title: title,
  };

  if (tracks !== undefined) {
    album.tracks = tracks;
  }

  return album;
}

const album1 = make_Album("Artist1", "Album One");
const album2 = make_Album("Artist2", "Album Two", 10);
const album3 = make_Album("Artist3", "Album Three", 8);

console.log(album1);
console.log(album2);
console.log(album3);
*/ 
