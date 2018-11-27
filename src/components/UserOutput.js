import React from 'react'

const UserOutput = props => 
    (
        <div className="teste">
            <p>{props.userName}</p>
            <p>{props.children}</p>
        </div>
    );

export default UserOutput;