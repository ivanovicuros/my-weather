import React, { useState, useEffect } from "react";
import { getForecast } from '../../actions/index';
import { connect } from "react-redux";
import styled from "styled-components";

const Search = styled.div`
    display:flex;
    justify-content: center;
    padding: 5vh;
    margin-top: 3%;
`
const Input = styled.input`
    border-radius: 10px;
    height: 7vh;
    width: 40vw;
    font-size: 1.2rem;
    opacity: .6;
    @media (max-width: 375xp) {
        height: 0.1vh;
    }
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
                <Input
                    name='name'
                    type='text'
                    value={city.name}
                    placeholder='Search'
                    onChange={handleChange}
                    maxLength='15'
                />
                <button>Location</button>
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