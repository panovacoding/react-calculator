import './Screen.css'

function Screen(props) {
    return (
        <>
            <input type="text" className="screen" value={props.value} readOnly/>
        </>
    );
}

export default Screen;