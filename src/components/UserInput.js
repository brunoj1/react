import React from 'react';
const UserInput = (props) => 
(
    <input onChange={props.change} type="text" name="name"/>
)

export default UserInput;