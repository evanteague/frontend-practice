import React from 'react';
import Keys from './Keys';
import Button from './Button';
import './Keypad.scss';

const Keypad = (props) => {
    const { handleClick } = props;

    
    return (
        <div className="keypad">
            {Keys.map(k => {
                const { key, type, style, span } = k;
                
                return <Button key={key} span={span} name={key} style={style} onClick={handleClick(key, type)} />
            })}
        </div>
    )

}

export default Keypad;