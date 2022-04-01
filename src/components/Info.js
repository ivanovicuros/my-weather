import React from "react"
import { connect } from "react-redux"

 const Info = (props) => {

     
    return (
        <>
            <div>
            <h1>{props.weather.name}</h1>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        weather: state.weather
    }
}    

export default connect(mapStateToProps)(Info);