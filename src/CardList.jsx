import React from 'react';
import Card from './Card';

import art from './art';

const style = {
    display: "flex",
    
}

const CardComponent = (art, i) => {
    return (
        <Card 
        key = {i}
        avatar={art.avatar}
        name={art.name}
        position={art.position}
        desc={art.desc}
        star={art.star}

        />
    )
}

const CardList = (props) => {
    const filterArtList = art.filter(
        (artItem)=>{
            return artItem.name.toLowerCase().includes(props.searchTopic.toLowerCase())
        }
    )

    return (<div style={style}>
        
            {filterArtList.map(CardComponent)}
        
    </div>)
}

export default CardList;