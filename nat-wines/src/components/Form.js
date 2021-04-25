import React from 'react'

const Form = (props) => {

    return(

        <div>

            <h1>Wine Name</h1>

            <input
            type = 'text'
            value={props.name}
            onChange={(e) => {
                props.setName(e.target.value) }}/>

            <h2>Year</h2>

            <input
            type = 'text'
            value={props.year}
            onChange={(e) => {
                props.setYear(e.target.value) }}/>

            <h2>Country</h2>
            <input
            type = 'text'
            value={props.country}
            onChange={(e) => {
                props.setCountry(e.target.value) }}/>

            <h6>Picture URL</h6>
            <input
            type = 'text'
            value={props.picture}
            onChange={(e) => {
                props.setPicture(e.target.value) }}/>

        </div>
    )

}

export default Form
