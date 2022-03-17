import React, { useState, useEffect } from "react";
import { getForecast } from '../actions'
import { connect } from 'react-redux'

const Weather = (props) => {
 const [city, setCity] = useState('')

useEffect(() => {
    props.dispatch(getForecast('brooklyn'))
}, [])

 const handleChange = e => {
     setCity({
         ...city,
         [e.target.name]: e.target.value
     })
 }
 const handleSubmit = e => {
    e.preventDefault();
    props.dispatch(getForecast(city))
 }
    
    return (
        <>
        <h1>My Weather</h1>
        </>
    )
}

const mapStateToProps = state => {
    return {
        weather: state.weather,
        isFetching: state.isFetching,
        error: state.error 
    }
}

export default connect(mapStateToProps)(Weather)