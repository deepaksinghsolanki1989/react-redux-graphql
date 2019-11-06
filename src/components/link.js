import React from 'react';

const Link = (props) =>  {
    return (
        <li>{props.link.businessName} {props.link.businessId}</li>
    )    
}

export default Link;
