import Screen from "./components/Screen/Screen";
import Body from "./components/Body/Body";
import './Calculator.css'
import { useState } from "react";
import { act } from "react-dom/test-utils";

const Calculator = (props) => {

    const [value, setValue] = useState('0');

    const isMaxLength = () => {
        return value.length === 16;
    }

    const isSecondDot = (button) => {
        return value.includes(',') && button === ','
    }

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
    }

    let [num1, setNum1] = useState(null);
    let [action, setAction] = useState(null);
    let [isCounting, setIsCounting] = useState(false)

    const handler = (e) => {
        if(e.target.name === 'clear') {
            setValue('0');
            return;
        }
        if(isMaxLength()) return;
        if(e.target.textContent === '.' && isSecondDot(e.target.textContent)) return;
        if(e.target.name === 'int') {

            if(value === '0' || isCounting) {
                setValue(e.target.textContent);
                setIsCounting(false);
            } else {
                setValue(value + e.target.textContent);
            }

        } else {
            setNum1(value);
            setIsCounting(true)

            if(e.target.name !== 'result') {
                setAction(e.target.name);
            } else {
                setValue(calculateActions[action](num1, value))
            }

        }
    }

    return (
        <div className="calculator">
            <Screen value={value}/>
            <Body buttonHandler={handler}/>
        </div>
    );
}

export default Calculator;