export const getSavedStreamIds = () => {
    const savedStreamIds = localStorage.getItem('saved_streams')
      ? JSON.parse(localStorage.getItem('saved_streams'))
      : [];
  
    return savedStreamIds;
  };
  
  export const saveStreamIds = (streamIdArr) => {
    if (streamIdArr.length) {
      localStorage.setItem('saved_streams', JSON.stringify(streamIdArr));
    } else {
      localStorage.removeItem('saved_streams');
    }
  };
  
  export const removeStreamId = (streamId) => {
    const savedStreamIds = localStorage.getItem('saved_streams')
      ? JSON.parse(localStorage.getItem('saved_streams'))
      : null;
  
    if (!savedStreamIds) {
      return false;
    }
  
    const updatedSavedStreamIds = savedStreamIds?.filter((savedStreamId) => savedStreamId !== streamId);
    localStorage.setItem('saved_streams', JSON.stringify(updatedSavedStreamIds));
  
    return true;
  };
  