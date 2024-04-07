import Button from "../Button/Button";
import './Body.css'

const Body = (props) => {

    const buttons = [
        {
            button: 'C',
            theme: 'gray',
            name: 'clear'
        },
        {
            button: '+/-',
            theme: 'gray',
            name: 'opposite'
        },
        {
            button: '%',
            theme: 'gray',
            name: 'percent'
        },
        {
            button: '/',
            theme: 'orange',
            name: 'divide'
        },
        {
            button: '7',
            theme: '',
            name: 'int'
        },
        {
            button: '8',
            theme: '',
            name: 'int'
        },
        {
            button: '9',
            theme: '',
            name: 'int'
        },
        {
            button: 'x',
            theme: 'orange',
            name: 'multiply'
        },
        {
            button: '4',
            theme: '',
            name: 'int'
        },
        {
            button: '5',
            theme: '',
            name: 'int'
        },
        {
            button: '6',
            theme: '',
            name: 'int'
        },
        {
            button: '-',
            theme: 'orange',
            name: 'substract'
        },
        {
            button: '1',
            theme: '',
            name: 'int'
        },
        {
            button: '2',
            theme: '',
            name: 'int'
        },
        {
            button: '3',
            theme: '',
            name: 'int'
        },
        {
            button: '+',
            theme: 'orange',
            name: 'sum'
        },
        {
            button: '0',
            theme: 'two-columns',
            name: 'int'
        },
        {
            button: '.',
            theme: '',
            name: 'int'
        },
        {
            button: '=',
            theme: 'orange',
            name: 'result'
        },
    ]
    return (
        <div className='body'>
            {buttons.map(({button, theme, name}, index) => (
                <Button 
                    theme={theme} 
                    button={button} 
                    name={name}
                    key={index} 
                    handler={props.buttonHandler}
                />
            ))}
        </div>
    );
}

export default Body;