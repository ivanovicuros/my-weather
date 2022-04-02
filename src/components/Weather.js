import React from "react";
import { connect } from 'react-redux';
import styled from "styled-components"
import Info from './Info/Info';
import SearchBar from "./SearchBar/SearchBar";
import Navbar from './NavbarNot/index'

const Weather = (props) => {
    
    return (
        <>
        <Navbar />
        <SearchBar />
        <Info />
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