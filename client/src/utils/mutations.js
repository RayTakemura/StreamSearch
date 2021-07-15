import gql from 'graphql-tag';

export const LOGIN = gql`
    mutation login($email: String!, $password: String!){
        login(email: $email, password: $password){
            token
            user{
                _id
            }
        }
    }
`
;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

<<<<<<< HEAD


=======
export const SAVE_STREAM = gql`
  mutation saveStream($input: savedStream!) {
      saveStream(input: $input) {
        _id
        username
        email
        streamCount
        savedStreams {
            #_id
            streamId
            title
            image
            link
     }
      }
  }
`;

export const REMOVE_STREAM = gql`
  mutation removeStream($streamId: ID!){
      removeStream(streamId: $streamId)
       {
        _id
        username
        email
        streamCount
        savedStreams {
            #_id
            streamId
            title 
            image 
            link 
     }
      }
  }
`
;
>>>>>>> 713259b7c537ba345aa725713bac8468027283b6
