import Screen from "../Screen/Screen";
import Body from "../Body/Body";
import './Calculator.css'
import { useState } from "react";

const Calculator = (props) => {

    const [value, setValue] = useState('0');
    const [num1, setNum1] = useState(null);
    const [action, setAction] = useState(null);
    const [isCounting, setIsCounting] = useState(false);

    const calculateActions = {
        divide: function(a, b) {
            return a / b
        },
        multiply: function(a, b) {
            return a * b
        },
        substract: function(a, b) {
            return a - b
        },
        sum: function(a, b) {
            return a + b
        },
        result: function(action, a, b) {
            return this[action](a, b);
        }
    }

    const isMaxLength = () => {
        return value.length === 16;
    }

    const isSecondDot = (button) => {
        return value.includes('.') && button === '.'
    }


    const setValueOnIntClick = (buttonInt) => {
        if(value === '0' || isCounting) {
            setValue(buttonInt);
            setIsCounting(false);
        } else {
            setValue(value + buttonInt);
        }
    }

    const setDataOnActionClick = (action) => {
        setNum1(value);
        setIsCounting(true)
        setAction(action);
    }


    const buttonClickHandler = (e) => {
        
        if(isMaxLength()) return;
        if(e.target.textContent === '.' && isSecondDot(e.target.textContent)) return;
        switch(e.target.name) {
            case 'clear': {
                setValue('0');
                break;
            }
            case 'int': {
                setValueOnIntClick(e.target.textContent);
                break;
            }
            case 'result': {
                action ? setValue(calculateActions.result(action, +num1, +value)) : setValue(value)
                break;
            }
            case 'opposite': {
                setValue(+value * -1);
                break;
            }
            case 'percent': {
                setValue(+value * 0.01);
                break;
            }
            default: {
                setDataOnActionClick(e.target.name);
                break;
            }
        }
    }

    return (
        <div className="calculator">
            <Screen value={value}/>
            <Body buttonHandler={buttonClickHandler}/>
        </div>
    );
}

export default Calculator;