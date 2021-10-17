import React from 'react';
import './Button.scss';

const Button = (props) => {
    const { name, onClick, style, span } = props;

    return (
        <button className={`button button--${style} button--${span}`} onClick={onClick}>{name}</button>
    )

}

export default Button;