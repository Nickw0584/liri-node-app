require("dotenv").config();
const keys = require("./keys.js");
const axios = require("axios");
const fs = require("fs");
const moment = require("moment")
const Spotify = require('node-spotify-api');

const spotify = new Spotify({
  id: keys.spotify.id,
  secret: keys.spotify.secret
});





const input = process.argv[2];
const topic = process.argv[3];


// use the case words to run the document
switch (input) {
  case "concert-this":
    bandInfo(topic);
    break;

  case "spotify-this-song":
    songInfo();
    break;

  case "movie-this":
    movieName();
    break;

  case "do-what-it-says":
    whatInfo();
    break;
}

// // uses spotify, omdb, imdb
// //use const for everything 
// // dont forget to use join
// //console.log(JSON.stringify(data, null, 2));
// //.join(" ")

// //i need be able to get concert events//
// function bandInfo(query) {
//   console.log("hi")
//   const querlyUrl = "https://rest.bandsintown.com/artists/" + query + "/events?app_id=codingbootcamp";
//  console.log(querlyUrl)
//   // // concert-this
//   axios.get(querlyUrl).then(
//     function (response) {
//       console.log(response.data[0].lineup[0])
//       //name
//      console.log(response.data[0].venue.name)
//        //venue
//     console.log(response.data[0])
//       //date
//       let everything = [
//        "Name: " + response.data[0].lineup + "\n",
//         "Venue: " + response.data[0].venue.name + "\n",
//         " Date: " + (moment(response.data[0].date).format("MM/DD/YYYY")),
//      ].join("");

//    })
// }


// function songInfo() {
//   spotify.search({ type: 'track', query: 'All the Small Things', limit: 5 }, function (err, data) {
//     if (err) {
//       return console.log('Error occurred: ' + err);
//     }
//     else {
//           console.log(
//             "artist:" + data.tracks.items[0].album.artist[0] + "\n",
//             "songName:" + data.tracks.items[0].songName + "\n",
//             "urlLink:" + data.tracks.items[0].urlLink + "\n",
//             "album:" + data.tracks.items[0].album + "\n"
//           ).join("");
//     console.log(data);
//           }
//         });
//       };

  


// //movie-this
// //movie result based on the actor or movie name
// // use omdb for stuff
// //movie-this "<movie name here>";
// //ratings .0 to get;

// function movieName() {
// console.log(hi)
//     this.findMovie= function (movieName) {
// const queryUrl2 = "http://www.omdbapi.com/" + movieName + "?apikey=[trilogy]&";
//     console.log(queryUrl2);
//     }}
//  axios.get(queryUrl).then(
//     function(response) {
//             "title: " + response.data[0].title + "\n",
//             "year: " + (moment(response.data[0].date).format("MM/DD/YYYY")) + "\n",
//             " imdbRating: " + response.data[0].imdbRating.average + "\n",
//             "rottenRating " + response.data[0].rottenRating.average + "\n",
//             "country: " + response.data[0].country + "\n",
//             "languages" + response.data[0].languages[4] + "\n",
//             "plot: " + response.data[0].plot + "\n",
//             "actors:" + response.data[0].actors + "\n"
//       }.join(""))

//     then.function(response.everything);{

//         if (everything.confirms)
//     console.log(everything)

//     else {console.log(
//     queryURL = term || "Mr.Nobody",
//     axios.get("http://omdbapi.com/?apikey=triligy&limit=1&t=" + myQuery))}
//     console.log(JSON.stringify(data, null, 2));
//   };
// //  // have it search by what it wants//
// // //do-what-it-says//
 function whatInfo(){
fs.readFile("random.txt", "utf8", function(error, data) {
  if (error) {
    
const output = data.split(",");
  for (var i = 0; i < output.length; i++) {
   console.log(output[i]);
 }
  console.log(JSON.stringify(data, null, 2));
  return console.log(error)
}}
);}
