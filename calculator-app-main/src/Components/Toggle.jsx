import React from 'react';
import './Toggle.scss';

const Toggle = (props) => {
    const { handleToggle, theme } = props;
    return (
        <div className="toggle">
            <div className="toggle__options">
                <span>1</span>
                <span>2</span>
                <span>3</span>
            </div>
            <label htmlFor="theme-1" className="toggle__label toggle__label--left">
                <input type="radio" className="toggle__input" checked={theme === 1} id="theme-1" onChange={handleToggle(1)} />
                <span className="circle" />
            </label>
            <label htmlFor="theme-2" className="toggle__label">
                <input type="radio" className="toggle__input" checked={theme === 2} id="theme-2" onChange={handleToggle(2)} />
                <span className="circle" />
            </label>
            <label htmlFor="theme-3" className="toggle__label toggle__label--right">
                <input type="radio" className="toggle__input" checked={theme === 3} id="theme-3" onChange={handleToggle(3)} />
                <span className="circle" />
            </label>
        </div>
    )

}

export default Toggle;