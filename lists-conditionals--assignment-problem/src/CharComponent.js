import React from 'react';

const CharComponent = (props) => {
    
    return (
        <div style={props.style}>
            <p onClick={props.click}>{props.item}</p>
        </div>
    );
};

export default CharComponent;