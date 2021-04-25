import React from 'react'
import { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { render } from '@testing-library/react';
import axios from 'axios'
import Form from '../Form'

const EditWine = (props) => {
    const[status, setStatus] = useState(0)

    const handleEdit = async () => {
        const res = await axios.put(`${props.url}/wines/${props.id}`,{
            name: props.name,
            year: props.year,
            country: props.country,
            picture: props.picture
        })

        props.getWine()

        if(res.status === 201){
            setStatus(201)
        }
    }

    const handleInfo = () => {
        props.setName(props.name)
        props.setYear(props.year)
        props.setCountry(props.country)
        props.setPicture(props.picture)


    useEffect(() => {setStatus(0)},[])
    useEffect(()=>{handleInfo()},[])

    render()
    if(status === 201){
        return <Redirect to= {`/wines/${props.id}`} />
    }
}

    return(

        <div className="editContainer">

            <h1>Let's Edit {props.name} </h1>

            <Form
            Name = {props.name}
            Year = {props.year}
            Country = {props.country}
            Picture = {props.picture} setName = {props.setName} setYear = {props.setYear} setCountry = {props.setCountry} setPicture = {props.setPicture}/>

            <button onClick={()=>{handleEdit()}}>Edit Wine!</button>
        </div>
    )

}

export default EditWine
