import React from 'react'

const divStyle = {
    margin: '10px'
};

const UserOutput = props => 
    (
        <div className="card" style={divStyle}>        
            <div className="card-body">
                <h5 className="card-title">{props.userName}</h5>
                <p className="card-text">{props.children}</p>
                <button onClick={props.click} className="btn btn-danger">Remove</button>
            </div>
        </div>
    );

export default UserOutput;