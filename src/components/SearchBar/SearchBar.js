import React, { useState, useEffect } from "react";
import { getForecast } from '../../actions/index';
import { connect } from "react-redux";
import styled from "styled-components";
import { FaSearchLocation } from 'react-icons/fa';

const Search = styled.div`
    padding: 5vh;
    margin-top: 3%;
`
const Input = styled.input`
    border-radius: 10px;
    height: 7vh;
    width: 40vw;
    font-size: 1.5rem;
    opacity: .6;
    @media (max-width: 375xp) {
        height: 0.1vh;
    }
`
const Form = styled.form`
    display: flex;
    justify-content: center;
`

const Button = styled.button`
    border: none;
    padding: 0;
    background: none;
    margin-left: 15px;
    padding: 3px;
    &:hover {
        background-color: white;
        border-radius: 5px;
    }
`

const SearchBar = (props) => {
    const [city, setCity] = useState({name: 'Brooklyn'})

useEffect(() => {
    props.dispatch(getForecast(city.name))
    setCity({name: ''})
}, [])

 const handleChange = e => {
     setCity({name: e.target.value})
 }
 const handleSubmit = e => {
    e.preventDefault();
    props.dispatch(getForecast(city.name))
    setCity({name: ''})
 }

    return (
        <>
        <Search>
            <Form onSubmit={handleSubmit}>
                <Input
                    name='name'
                    type='text'
                    value={city.name}
                    placeholder='Search'
                    onChange={handleChange}
                    maxLength='15'
                />
                <Button><FaSearchLocation size={45} /></Button>
                <button>button</button>
            </Form>
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