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
  export const searchGoogleBooks = (query) => {
    return fetch(`https://imdb8.p.rapidapi.com/title/find?q=${query}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "00b44d7633msh8eddfec456e7a17p1f2a73jsnceff2b45582c",
            "x-rapidapi-host": "imdb8.p.rapidapi.com"
        }
    })
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.error(err);
    });
  };
  