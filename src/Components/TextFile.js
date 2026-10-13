import React , {useState} from 'react'
export default function TextFile({heading}) {
    const handleUpClick = ()=>{
        console.log("button was clicked");
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleLoClick=() =>{
        let newText=text.toLowerCase();
        setText(newText);
    }
    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value);
    }
    const [text,setText]=useState('');
   // setText("hii");
  return (
    <>
    <div className='container'>
        <h1>{heading}</h1>
        <div className="myBox">
  <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
</div>
<button className="btn btn-primary mx-3" onClick={handleUpClick} >Convert to Uppercase</button>
<button className="btn btn-primary" onClick={handleLoClick}>Convert to Lowercase</button>

        </div>
        <div className="container">
            <h3>Your Text Summery</h3>
            <p>{text.split(" ").length} words , {text.length} characters</p>
            <p>It will take {0.008*text.split(" ").length} minutes to read</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
    </>
  )
}
