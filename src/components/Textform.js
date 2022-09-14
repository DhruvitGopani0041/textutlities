import React, { useState } from 'react'

export default function Textform(props) {
    const [text, settext] = useState("Enter text here");

    const onclickupfire = () => {
        let newtext = text.toUpperCase();
        settext(newtext);
        props.showalert("Converted into Uppercase 👍","success");
     }

    const onclicklofire = () => {
        let newtext = text.toLowerCase();
        settext(newtext);
        props.showalert("Converted into Lowercase 👍","success");
    }

    const onclearfire = () => {
        let newtext = '';
        settext(newtext);
        props.showalert("cleard text 👍","success");
    }

    const onchangefire = (Event) => {
        settext(Event.target.value)
    }

    return (

        <>

            <div className={`container text-${props.mode === 'primary'?'dark':'light'}`} >
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className={`form-control text-${props.mode === 'primary'?'dark':'light'}`} style={{backgroundColor: props.mode === 'primary'?'white':'gray' }} value={text} onChange={onchangefire} id="mybox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2 mb-5" style={{backgroundColor: props.mode === 'primary'?'info':'black' }} onClick={onclickupfire}>Convert To Uppercase</button>
                <button className="btn btn-primary mx-2 mb-5" style={{backgroundColor: props.mode === 'primary'?'info':'black' }} onClick={onclicklofire}>Convert To lowercase</button>
                <button className="btn btn-primary mx-2 mb-5" style={{backgroundColor: props.mode === 'primary'?'info':'black' }} onClick={onclearfire}>Clear Text</button>

            </div>
            <div className={`container text-${props.mode === 'primary'?'dark':'light'}`}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes Reading</p>
                <p>{0.0180 * (text.length)} Minutes Speaking</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
            </div>
        </>
    )
}
