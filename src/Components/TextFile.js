import React , {useState} from 'react'
export default function TextFile({heading}) {
    const handleUpClick = ()=>{
        console.log("button was clicked");
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value);
    }
    const [text,setText]=useState('Enter Text here');
   // setText("hii");
  return (
    <div>
        <h1>{heading}</h1>
        <div className="myBox">
  <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
</div>
<button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        </div>

  
  )
}
