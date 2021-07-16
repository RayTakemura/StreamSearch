import React from 'react';

const SearchBar = () => {

    return (
        <div className="row d-flex justify-content-center mt-5">
            <div className="col-md-5">
                <div className="input-group ">
                    <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search"
                        aria-describedby="search-addon" />
                    <button type="button" className="btn btn-outline-primary">search</button>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;