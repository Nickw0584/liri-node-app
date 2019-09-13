require("dotenv").config();

var keys = require("./keys.js")

var spotify = new spotify(keys.spotify);

// concert-this
//spotify-this-song
//movie-this
//do-what-it-says

"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"

spotify-this-song '<song name here>'

movie-this "<movie name here>";

//i need be able to get concert events
// get song results 
//movie result based on the actor or movie name
// have it search by what it wants

//spotify to get all of these things
//use const for everything
//const moment =require(string) 
// use omdb for stuff
// dont forget to use join
//ratings .0 to get;
// uses spotify, omdb, imdb
// use a switch for stuff

const input = process.argv[2];
const topic = process.argv[3];

switch (topic){
    case "concert-this":
        bandInfo();
        break;
  
     case "spotify-this-song":
         songInfo();
         break;
  
     case "movie-this":
          movieInfo();
          break;
  
     case "do-what-it-says":
          whatInfo();
          break;

}