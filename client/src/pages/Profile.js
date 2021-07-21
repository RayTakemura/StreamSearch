import React from 'react';
import { Jumbotron, Container, Card, Button } from 'react-bootstrap';
import Auth from '../utils/auth';
import { removeStreamId } from '../utils/localStorage';

import {useMutation, useQuery} from '@apollo/react-hooks';
import { GET_ME } from '../utils/queries';
import { REMOVE_STREAM } from '../utils/mutations';


const Profile = () => {

  const { loading, data} = useQuery(GET_ME);
  const [removeStream, {error}] = useMutation(REMOVE_STREAM);
  
  const userData = data?.me || [];

  //returning an empty array with 0 length
  console.log(userData);
  //returning undefined
  console.log(data);
  //returning false
  console.log(loading);


  // create function that accepts the book's mongo _id value as param and deletes the book from the database
  const handleDeleteStream = async (streamId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const { data } = await removeStream ({
          variables: { streamId }
        
        });
        console.log(data);

      // upon success, remove book's id from localStorage
      removeStreamId(streamId);
    } catch (err) {
      console.error(err);
    }
  };

  // if data isn't here yet, say so
 // if (!loading) {
    //return <h2>LOADING...</h2>;
  //}


  return (
    <>
      <Jumbotron fluid className="text-light bg-dark">


      </Jumbotron>
      <Container>
        <h2 className="py-4">
          {userData?.savedStreams?.length
            ? `Viewing ${userData?.savedStreams?.length} saved ${
                userData?.savedStreams.length === 1 ? "stream" : "streams"
              }:`
            : "You have no saved streams!"}
        </h2>
        <div className="d-flex flex-wrap justify-content-center">
        {/* <CardColumns> */}
          {userData?.savedStreams?.map((stream) => {
            return (
              <Card style={{ marginBottom:'1.25rem'}} key={stream.streamId} border='dark' className="mx-3"  >
                {stream.image ? (
                  <Card.Img
                    src={stream.image}
                    alt={`The poster for ${stream.title}`}
                    variant="top"
                  />
                ) : null}
                <Card.Body>
                  <Card.Title>{stream.title}</Card.Title>
                  <Card.Link href={stream.link}>
                      Watch here!
                  </Card.Link>
                  <br></br>
                  <br></br>
                  <Button
                    className="btn-block btn-danger btn-info"
                    onClick={() => handleDeleteStream(stream.streamId)}
                  >
                    Delete  
                  </Button>
                  {error && <div>Login failed</div>}
                </Card.Body>
              </Card>
            );
          })}
        {/* </CardColumns> */}
        </div>
      </Container>
    </>
  );
};

export default Profile;
