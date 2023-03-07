import React from 'react';

const User = (props) => {
 return(
 <div style={{display: 'inline-block', padding: '10px', border:'1px solid black', margin:'10px'}}>
    <h1>{props.name}</h1>
    <h4>{props.email}</h4>
    <h4>{props.username}</h4>
 </div>
 )
}

export default User;