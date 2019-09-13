import React from 'react';
import { Link } from "react-router-dom";

function House(props) {
    return (
        <div>
            <Link to={`/house/{props.name}`}>
                <img src={props.image_url} alt={props.name} />
            </Link>

            <h2>Property Name: {props.property_name}</h2>

            <h2>Address: {props.address}</h2>

            <h2>City: {props.city}</h2>

            <h2>State: {props.state}</h2>

            <h2>Zip Code: {props.zip}</h2>

            <h2>Recommended Monthly Mortgage: {props.mortgage}</h2>

            <h2>Desired Rent: {props.rent}</h2>
            
            <h2>Recommended Rent: {+props.mortgage * 1.25}</h2>

            <button onClick={() => props.deleteHouse(props.id)}>Delete</button>
        </div>

    )
}
export default House