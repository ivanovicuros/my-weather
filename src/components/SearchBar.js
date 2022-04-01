import React from "react";

const SearchBar = (props) => {
    const {city, handleChange, handleSubmit} = props;

    return (
        <>
        <div>
        <form onSubmit={handleSubmit}>
            <div>
                <input name='name' type='text' value={city.name} placeholder='Search' onChange={handleChange} maxLength='15' />
                <button>Location</button>
            </div>
        </form>
        </div>
        </>
    )
}


export default SearchBar;