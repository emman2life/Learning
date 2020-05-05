import React from 'react';


    const ValidationComponent=(props)=> {
        let textLength = <p>Text too short{}</p>
           
        
        if(props.inputTextLength>=5){
                textLength=<p>Is long enough</p>
        
        }
        return (
            <div>
                {textLength}
            </div>
        );
        
    }


export default ValidationComponent;