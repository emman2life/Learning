import React from 'react'
import './UserOutput.css'
const UserOutput = (props)=>{
    return(
        <div className="UserOutput">
            <p>{props.firstName}</p>
            <p>{props.lastName}</p>
        </div>
    );
}
export default UserOutput