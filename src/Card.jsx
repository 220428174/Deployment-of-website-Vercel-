import React from 'react';

const style = {
    padding: "90px",
    
}

const Card =(props) => {
    return (
    <div style = {style}>
        
        <img src ={props.avatar} alt="Avatar"/>
        <h2> {props.name}</h2>
        <h4> {props.position}</h4>
        <p> {props.desc}</p>
        <p> {props.star} </p>
        
    </div>
    
    )

}

export default Card;