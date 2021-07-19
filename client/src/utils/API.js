  // make a search to imdb  api
  //https://rapidapi.com/apidojo/api/imdb8
  export const searchRapid = (query) => {
    console.log(query);
    return fetch(`https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=${query}&country=us`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "745e72bfb2mshcd1b1af9ded37c3p1ca71djsnfeb89c9db301",
        "x-rapidapi-host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com"
      }
    })
  };
  