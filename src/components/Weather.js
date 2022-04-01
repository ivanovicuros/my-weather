import React, { useState, useEffect } from "react";
import { getForecast } from '../actions'
import { connect } from 'react-redux'

const Weather = (props) => {
 const [city, setCity] = useState({name: 'Brooklyn'})

useEffect(() => {
    props.dispatch(getForecast(city.name))
    setCity({
        ...city,
        name: ''
    })
}, [])



 const handleChange = e => {
     setCity({...city,
         name: e.target.value
     })
 }
 const handleSubmit = e => {
    e.preventDefault();
    props.dispatch(getForecast(city.name))
 }
    
    return (
        <>
        <h1>My Weather</h1>
        <h1>{props.weather.name}</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <input name='name' type='text' value={city.name} placeholder='Search' onChange={handleChange} maxLength='15' />
                <button>Location</button>
            </div>
        </form>
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