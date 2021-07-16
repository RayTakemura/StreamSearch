import React, { useState, useEffect } from 'react';
import Auth from '../utils/auth';
import { saveStream, searchGoogleBooks } from '../utils/API';
import { saveStreamIds, getSavedStreamIds } from '../utils/localStorage';

import { SAVE_STREAM } from '../utils/mutations';
import {useMutation} from '@apollo/react-hooks';

const SearchStreams = () => {
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
      const response = await searchGoogleBooks(searchInput);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const { items } = await response.json();

      const streamData = items.map((stream) => ({
        streamId: stream.id,
        title: stream.title,
        image: stream.imageLinks?.thumbnail || '',
        link: stream.link,
      }));

      setSearchedStreams(streamData);
      setSearchInput('');
    } catch (err) {
      console.error(err);
    }
  };

  // create function to handle saving a book to our database
  const handleSaveStream = async (bstreamId) => {
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

  return(
    <>
    <form className="form" onSubmit={SearchStreams}>
      <label className="label" htmlFor="query">
        Media Title:
      </label>
      <input
        className="input"
        type="text"
        name="query"
        placeholder="search here"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="button">Search</button>
    </form>
    <div className="card-list">
      {movies} 
    </div>
  </>
);
}

export default SearchStreams;