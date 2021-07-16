
// route to get logged in user's info (needs the token)
export const getMe = (token) => {
    return fetch('/api/users/me', {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    });
  };
  
  export const createUser = (userData) => {
    return fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
  };
  
  export const loginUser = (userData) => {
    return fetch('/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
  };

  
  // save stream data for a logged in user
  export const saveStream = (streamData, token) => {
    return fetch('/api/users', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(streamData),
    });
  };
  
  // remove saved book data for a logged in user
  export const deleteStream = (streamId, token) => {
    return fetch(`/api/users/streams/${streamId}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  };
  
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
    // .then(response => {
    //   console.log(response);
    //   return response.json();
    // })
    // .then(response=> {
    //   console.log(response)
    // })
    // .catch(err => {
    //   console.error(err);
    //   return err;
    // });
  };
  