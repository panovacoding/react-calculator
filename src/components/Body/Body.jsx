import Button from "../Button/Button";
import { buttons } from "../../config/ButtonConfig";
import './Body.css'

const Body = (props) => {

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