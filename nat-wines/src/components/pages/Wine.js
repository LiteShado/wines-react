import axios from 'axios'
import React, { useState , useEffect } from 'react'
import { Link } from 'react-router-dom'
import { render } from '@testing-library/react';
import { Redirect } from 'react-router-dom'

const Wine = (props) => {
    const[wineInfo, setWineInfo] = useState([])
    const[status, setStatus] = useState(0)


    const handleDelete = async () => {
        const res = await axios.delete(`${props.url}/${props.id}`)
        if(res.status === 200){
            setStatus(200)
        }
    }

    const handleInfo = () => {
        let arr = []
        arr.push(`Name: ${props.name}`, `Year: ${props.year}`, `Country: ${props.country} ` )
        if(props.name !== undefined ){
            setWineInfo(arr)
        }
    }

    useEffect(() => {setStatus(0)},[])
    useEffect(()=>{handleInfo()},[])

    render()
    if(status === 200){
        return <Redirect to= {`/wines`} />
    }

    return(
        <div>
            <div className = 'singleWine'>
                <div>
                    <img src = {props.picture} />
                </div>

                <div className = 'wineInfo'>
                    {wineInfo.map((wine, i) => (
                    <div key = {i}>{wine}</div>
                    ))}
                </div>

            </div>

            <div className = 'buttonContainer'>
                <button > <Link to= {`/edit/${props.id}`}>Edit a Wine!</Link> </button>
                <button onClick={()=>{handleDelete()}}>Delete</button>
            </div>


        </div>


    )
}

export default Wine
