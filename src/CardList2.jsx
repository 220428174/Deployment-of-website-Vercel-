import React from 'react';
import Card from './Card';

import art2 from './art2';

const style = {
    display: "flex"
}

const CardComponent = (art2, i) => {
    return (
        <Card 
        key = {i}
        avatar={art2.avatar}
        name={art2.name}
        position={art2.position}
        desc={art2.desc}

        />
    )
}

const CardList2 = (props) => {
    return (<div style={style}>
        
            {art2.map(CardComponent)}
        
    </div>)
}


export default CardList2;