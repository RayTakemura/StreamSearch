import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero'
import Auth from '../utils/auth';
import { searchRapid } from '../utils/API.js';
import { saveStreamIds, getSavedStreamIds } from '../utils/localStorage';

import { SAVE_STREAM } from '../utils/mutations';
import {useMutation} from '@apollo/react-hooks';

const Home = () => {
    // create state for holding returned google api data
  const [searchedStreams, setSearchedStreams] = useState([]);
  // create state for holding our search field data
  const [searchInput, setSearchInput] = useState('');

  // create state to hold saved bookId values
  const [savedStreamIds, setSavedStreamIds] = useState(getSavedStreamIds());

  const [saveStream, {error}] = useMutation(SAVE_STREAM );


  // set up useEffect hook to save `savedBookIds` list to localStorage on component unmount
  // learn more here: https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
  useEffect(() => {
    return () => saveStreamIds(savedStreamIds);
  });

  // create method to search for books and set state on form submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }

    try {
      const response = await searchRapid(searchInput);

      //console.log(response.json());
      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const items  = await response.json();
      console.log(items)

      const streamData = items.results.map((stream) => ({
        streamId: stream.id,
        title: stream.name,
        image: stream.picture || '',
        link: stream.locations[0].url,
        
      }));

      setSearchedStreams(streamData);
      setSearchInput('');
    } catch (err) {
      console.error(err);
    }
  };

  // create function to handle saving a book to our database
  const handleSaveStream = async (streamId) => {
    // find the book in `searchedBooks` state by the matching id
    const streamToSave = searchedStreams.find((stream) => stream.streamId === streamId);

 

    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const {data} = await saveStream({
        variables: { input: streamToSave }
      });

      // if stream successfully saves to user's account, save stream id to state
      setSavedStreamIds([...savedStreamIds, streamToSave.streamId]);
    } catch (err) {
      console.error(err);
    }
  };
    return (
        <main className="container">
            <div className="row d-flex justify-content-center mt-5">
                <div className="col-md-5">
                    <form className="input-group form form-group" onSubmit={handleFormSubmit}>
                        <input 
                            // type="search" 
                            className="form-control rounded input" 
                            type="text"
                            name="query"
                            placeholder="Search" 
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                            aria-label="Search"
                            aria-describedby="search-addon" />
                        <button type="submit" className="btn btn-outline-primary">search</button>
                    </form>
                </div>
            </div>

            <div className="card-list">
            {/* {movies}  */}
            {/* {console.log(searchInput)} */}
            </div>
            
            <Hero />
        </main>
    )
}

export default Home;