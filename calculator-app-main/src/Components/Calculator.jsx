import React, { useState } from 'react';
import Toggle from './Toggle';
import Display from './Display';
import Keypad from './Keypad';
import './Calculator.scss';

function doMath(type, number1, number2) {
    const parsedNum1 = parseFloat(number1);
    const parsedNum2 = parseFloat(number2);
    switch (type) {
        case 'add':
            return parsedNum1 + parsedNum2;
        case 'subtract':
            return parsedNum1 - parsedNum2;
        case 'multiply':
            return parsedNum1 * parsedNum2;
        case 'divide':
            return parsedNum1 / parsedNum2;
        default:
            break;
    }
}

const DEFAULT_NUMBER = '0';

const Calculator = () => {
    const [theme, setTheme] = useState(1);
    const [currentAction, setCurrentAction] = useState('');
    const [firstNumber, setFirstNumber] = useState(DEFAULT_NUMBER);
    const [secondNumber, setSecondNumber] = useState(DEFAULT_NUMBER);
    const [displayValue, setDisplayValue] = useState(DEFAULT_NUMBER);

    const handleToggle = (thm) => () => {
        setTheme(thm);
    }

    /*
        User enters first number, save first number, show in display
        User enters action, save action
        User enters second number, save second number, show in display
        User hits enter, adds 2 numbers, saves in first number, clears out second number, show in display
    */

    const handleClick = function handleClick(key, type) {
        function processMath() {
            switch (type) {
                case 'number':
                    if (!currentAction) {
                        if (firstNumber === '0') {
                            setFirstNumber(key);
                            setDisplayValue(key);
                        } else {
                            setFirstNumber(firstNumber + key);
                            setDisplayValue(firstNumber + key);
                        }
                    } else {
                        if (secondNumber === '0') {
                            setSecondNumber(key);
                            setDisplayValue(key);
                        } else {
                            setSecondNumber(secondNumber + key);
                            setDisplayValue(secondNumber + key);
                        }
                    }
                    break;
                case 'delete':
                    setDisplayValue(DEFAULT_NUMBER)
                    setFirstNumber(DEFAULT_NUMBER);
                    setSecondNumber(DEFAULT_NUMBER);
                    break;
                case 'reset':
                    setCurrentAction('');
                    setDisplayValue(DEFAULT_NUMBER);
                    setFirstNumber(DEFAULT_NUMBER);
                    setSecondNumber(DEFAULT_NUMBER);
                    break;
                case 'sum':
                    if (!currentAction) {
                        break;
                    }
                    const result = doMath(currentAction, firstNumber, secondNumber).toString();
                    setFirstNumber(result);
                    setSecondNumber(DEFAULT_NUMBER);
                    setDisplayValue(result);
                    setCurrentAction('');
                    break;
                case 'decimal':
                    if (!currentAction && !firstNumber.includes('.')) {
                        const newFirstNumberValue = firstNumber + '.';
                        setFirstNumber(newFirstNumberValue);
                        setDisplayValue(newFirstNumberValue);
                    } else if (currentAction && !secondNumber.includes('.')) {
                        const newSecondNumberValue = secondNumber + '.';
                        setSecondNumber(newSecondNumberValue);
                        setDisplayValue(newSecondNumberValue);
                    }
                    break;
                default:
                    setCurrentAction(type);
                    break;
            }
        }
        return processMath;
    }

    return (
        <div className={`calculator calculator--theme-${theme}`}>
            <div className="container">
                <div className="header">
                    <div>calc</div>
                    <div className="theme">
                        <span className="theme__label">THEME</span>
                        <Toggle handleToggle={handleToggle} theme={theme} />
                    </div>
                </div>
                <Display value={displayValue} />
                <Keypad handleClick={handleClick} />
            </div>
        </div>
    )

}

export default Calculator;