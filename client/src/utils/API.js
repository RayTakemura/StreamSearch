export const userProfile = (token) => {
    return fetch('/api/users/me', {
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`,
          },
    });
};

export const addUser = (userData) => {
    return fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
}

export const loginUser = (userData) => {
    return fetch('/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
  };

  export const addStream = (streamData, token) => {
      return fetch('/api/users', {
          method: 'PUT',
          headers:{
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`,
          },
          bodyLJSON.stringify(streamData),
      });
  };

  export const RemoveStream = (streamId, token) => {
      return fetch(`/api/users/profile/${streamId}`, {
            method: 'DELETE',
            headers: {
            authorization: `Bearer ${token}`,
        },
      });
  };

  export const searchImdb = (query) => {
      return fetch
  };
