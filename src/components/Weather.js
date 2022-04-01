import React, { useState, useEffect } from "react";
import { getForecast } from '../actions'
import { connect } from 'react-redux'
import styled from "styled-components"
import Info from './Info';
import SearchBar from "./SearchBar";


const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`


const Weather = (props) => {
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
        <Container>
        <h1>My Weather</h1>
        <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} city={city} />
        <Info />
        </Container>
        </>
    )
}

const mapStateToProps = state => {
    return {
        isFetching: state.isFetching,
        error: state.error 
    }
}

export default connect(mapStateToProps)(Weather)