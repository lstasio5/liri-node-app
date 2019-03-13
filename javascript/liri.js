
require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var axios = require("axios");
var fs = require("fs");

//"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"


var artist = process.argv.slice(3).join(" ")
console.log(artist);

axios
  .get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
  .then(function(response) {

    console.log(response.data);
    // Having issues with getting certain data points to display- node giving me an error
    //console.log(response.venue.name);
  }

)
//node liri.js spotify-this-song '<song name here>'


 
var songName = process.argv.slice(3).join(" ");
 
var spotify = new Spotify(keys.spotify);


spotify
  .search({ type: 'track', query: songName })
  .then(function(response) {
    console.log(response);
  })
  .catch(function(err) {
    console.log(err);
  });
 
//I am getting an error about the .env
