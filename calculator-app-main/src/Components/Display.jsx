import React from 'react';
import './Display.scss';

const Display = (props) => {
    const { value } = props;
    return (
        <div className="display">{value}</div>
    )

}

export default Display;