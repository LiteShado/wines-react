import { render } from '@testing-library/react';
import { Redirect } from 'react-router-dom'
import axios from 'axios';
import React, { useState , useEffect } from 'react'
import Form from '../Form';

const CreateWine = (props) => {

    const[id, setId] = useState(0)
    const[status, setStatus] = useState(0)


    const handleInfo = () => {
        props.setName('')
        props.setYear('')
        props.setCountry('')
        props.setPicture('')
    }

    const handlePost = async () => {

        const res = await axios.post(props.url, {

            name: props.name,
            year: props.year,
            country: props.country,
            image: props.Image
        })

        setId(res.data.id)

        props.getWines()

        if(res.status === 201){
            setStatus(201)
        }
    }

    useEffect(()=>{handleInfo()},[])
    useEffect(() => {setStatus(0)},[])

    render()

    if(status === 201){
        return <Redirect to= {`/wines/${id}`} />
    }

    return(

        <div className = 'createWine'>

            <h1>Create A WINE</h1>

            <Form
            Name = {props.name}
            Year = {props.year}
            Country = {props.country}
            Picture = {props.picture} setName = {props.setName} setYear = {props.setYear} setCountry = {props.setCountry} setPicture = {props.setPicture} />

            <button onClick={()=>{handlePost()}}>Add This Wine</button>

        </div>
    )
}

export default CreateWine
