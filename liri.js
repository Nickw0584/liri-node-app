require("dotenv").config();
const keys = require("./keys.js");
const axios = require("axios");
const fs = require("fs");
const moment = require("moment")

const input = process.argv[2];
const topic = process.argv[3];

console.log(process.argv)

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

// uses spotify, omdb, imdb
//use const for everything 
// dont forget to use join
//console.log(JSON.stringify(data, null, 2));
//.join(" ")

//i need be able to get concert events//
function bandInfo(query) {
  console.log("hi")
  const querlyUrl = "https://rest.bandsintown.com/artists/" + query + "/events?app_id=codingbootcamp";
  console.log(querlyUrl)
  // // concert-this
  axios.get(querlyUrl).then(
    function (response) {
      console.log(response.data[0].lineup[0])
      //name
      
      console.log(response.data[0].venue.name)
      
      console.log(response.data[0])

      //venue

      //date

      
      // let everything = [
      //   "Name: " + response.data.name + "\n",
      //   "Venue: " + response.data.venue + "\n",
      //   " Date: " + (moment(bandResponse.data[0].date).format("MM/DD/YYYY")),
      // ].join("");
      // console.log(JSON.stringify(data, null, 2));
    })
}
// // get song results
// //spotify to get all of these things
// //spotify-this-song
// //spotify-this-song '<song name here>'
// const spotify = new spotify(keys.spotify);
// spotify.request("https://api.spotify.com/v1/search" + song )
// .then (function(response3){
//     let everything3 =[
//         "Artist :" + response3.data.Artist + "\n",
//         "SongName:" + response3.data.SongName + "\n",
//         "URL:"     + response3.data.URL    + "\n",
//         "Album: "  + response3.data.Album  + "\n",
//     ].join("");
//     console.log(JSON.stringify(data, null, 2));
// })

// //movie-this
// //movie result based on the actor or movie name
// // use omdb for stuff
// //movie-this "<movie name here>";
// //ratings .0 to get;

// const movie = function() {
//     this.findMovie= function (movie) {
// let queryUrl2 = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
// axios.get(queryUrl2).then(
//     function(response2) {
//         let everything2 = [
//             "title: " + response2.data.title + "\n",
//             "year: " + response2.data.year + "\n",
//             " imdbRating: " + response2.data.imdbRating.average + "\n",
//             "rottenRating " + response2.data.rottenRating.average + "\n",
//             "country: " + response2.data.country + "\n",
//             "languages" + response2.data.languages[4] + "\n",
//             "plot: " + response2.data.plot + "\n",
//             "actors:" + response2.data.actors + "\n",
//           ].join("");

//     then.function(response.everything2);{

//         if (everything2.confirms)
//     console.log(everything2)

//     else {console.log(
//     queryURL = term || "Mr.Nobody",
//     axios.get("http://omdbapi.com/?apikey=triligy&limit=1&t=" + myQuery))}
//     console.log(JSON.stringify(data, null, 2));
//     }
// // have it search by what it wants//
// //do-what-it-says//
// function whatInfo(){
// fs.readFile("random.txt", "utf8", function(error, data) {
//   if (error) {
//     return console.log(error);
//   }
//   const output = data.split(",");
//   for (var i = 0; i < output.length; i++) {
//     console.log(output[i]);
//   }
//   console.log(JSON.stringify(data, null, 2));
// });


//function bandInfo(){
   // let artist = "";
    //for (var i = 5; i < input.length; i++) {

       // if (i > 2 && i < input.length) {
         // artist = artist + "+" + input[i];
        //} else {
        //  artist += input[i];
       // }
//};

//function songInfo(){
   // let song = "";
   // for (var i = 5; i < input.length; i++) {

       // if (i > 5 && i < input.length) {
        //  song = song + "+" + input[i];
        //} else {
         // song += input[i];
       // }
//};

//function movieInfo(){
  //  let movieName = "";
   // for (var i = 5; i < input.length; i++) {

   // if (i > 5 && i < input.length) {
   ///   movieName = movieName + "+" + input[i];
   // } else {
     // movieName += input[i];


