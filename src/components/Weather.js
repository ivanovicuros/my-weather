import React from "react";
import { connect } from 'react-redux';
import styled from "styled-components"
import Info from './Info/Info';
import SearchBar from "./SearchBar/SearchBar";
import Navbar from './NavbarNot/index';
import pageBackground from '../images/pretty.jpg'

const Page = styled.div`
    background: url(${pageBackground});
    background-size: cover;
    height: 100vh;
`

const Weather = (props) => {
    
    return (
        <>
        <Page>
            <Navbar />
            <SearchBar />
            <Info />
        </Page>
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