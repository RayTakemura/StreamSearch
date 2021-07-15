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
  mutation addUser($userName: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_STREAM = gql`
  mutation addStream($stream: ID!){
      addStream(stream: $stream){
        addLiked
      }
      stream{
          _id
          name
          image
      }
  }
`
;

export const REMOVE_STREAM = gql`
  mutation removeStream($stream: ID!){
      removeStream(stream: $stream){
          removeStream
      }
      stream{
          _id
          name
          image
      }
  }
`
;