import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';


const AllWines = (props) => {

    useEffect(() => {props.getWines()})

    return(
        <div className="allWines">

            <h1>All Wines</h1>

            {props.AllWines.map(wine => (
                <div key = {wine.id}>

                    <Link to= {`/wine/${wine.id}`}> {wine.name} </Link>

                </div>

            ))}

        </div>
    )
}

export default AllWines
