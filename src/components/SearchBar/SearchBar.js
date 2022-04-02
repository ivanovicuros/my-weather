import React, { useState, useEffect } from "react";
import { getForecast } from '../../actions/index';
import { connect } from "react-redux";
import styled from "styled-components";

const Search = styled.div`
    display:flex;
    justify-content: center;
`

const SearchBar = (props) => {
    const [city, setCity] = useState({name: 'Brooklyn'})

// useEffect(() => {
//     props.dispatch(getForecast(city.name))
//     setCity({
//         ...city,
//         name: ''
//     })
// }, [])

 const handleChange = e => {
     setCity({...city,
         name: e.target.value
     })
 }
 const handleSubmit = e => {
    e.preventDefault();
    props.dispatch(getForecast(city.name))
    setCity({...city,
        name: ''
    })
 }

    return (
        <>
        <Search>
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    name='name'
                    type='text'
                    value={city.name}
                    placeholder='Search'
                    onChange={handleChange}
                    maxLength='15'
                />
                <button>Location</button>
            </div>
        </form>
        </Search>
        </>
    )
}

const mapStateToProps = state => {
    return {
        isFetching: state.isFetching,
        error: state.error 
    }
}

export default connect(mapStateToProps)(SearchBar);