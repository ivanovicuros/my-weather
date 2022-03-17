import React, { useState, useEffect } from "react";
import { getForecast } from '../actions'


const Weather = (props) => {
 const [city, setCity] = useState('')



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





export default Weather