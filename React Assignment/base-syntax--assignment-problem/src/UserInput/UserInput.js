import React from 'react'
const UserInput = (props)=>{
    return(
        <input type="text" onChange={props.change} value={props.firstName}/>
    );
}
export default UserInput