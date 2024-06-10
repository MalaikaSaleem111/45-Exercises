//Album
function make_album(artist, title, tracks) {
    let album = {
        artist,
        title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
console.log(make_album("Artist no. 1", "First Album"));
console.log(make_album("Artist no.2", "Second Album"));
console.log(make_album("Artist no.3", "Third Album", 10));
export {};
