import React from 'react';

import './Button.css';

const Button = ({ children, className = '', ...props }) => {
    return (
        <button className={`button ${className}`.trim()} { ...props }>{ children }</button>
    );
}
 
export default Button;