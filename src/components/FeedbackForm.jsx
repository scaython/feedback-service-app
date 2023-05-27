import React, { useContext } from 'react'
import { useState } from 'react'
import Card from './shared/Card'
import RatingSelector from './RatingSelector'
import FeedBackContext from '../context/FeedBackContext'




function FeedbackForm() {

    const [text, setText] = useState("")
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [msgHidden, setMsgHidden] = useState(true)
    const [rating,setRating]=useState(10)
    const {addFeedBack} = useContext(FeedBackContext)
     
    const handleFormSubmit=(e)=>{
        e.preventDefault()
        const newFeedBack={
            text,
            rating
        }
        addFeedBack(newFeedBack)
        setRating(10)
        setText(" ")
        setBtnDisabled(true)
        setMsgHidden(true)
    }

    const handleTextChange = (e) => {
        setText(e.target.value)
        const inputValue = e.target.value;
        setText(inputValue);
        if (inputValue.length >= 10 && btnDisabled) {
          setBtnDisabled(false);
          setMsgHidden(true);
        } else if (inputValue.length < 10 && !btnDisabled) {
          setBtnDisabled(true);
          setMsgHidden(true);
        } else if (inputValue.length >= 1 && btnDisabled) {
          setMsgHidden(false);
        } else if(inputValue.length<1){
            setMsgHidden(true)
        }
        
    }
    return (
        <div>
         <form className='card' onSubmit={handleFormSubmit}>
            <h2>Rate our service</h2>
            <RatingSelector select={(rating)=>setRating(rating)}/>
            
            <div className="input-group">
                <input onChange={handleTextChange} type="text" id='review-input' placeholder='Your thoughts...' value={text} />
                <button type='submit' className='form-button' disabled={btnDisabled}>Send</button>
                <p hidden={msgHidden} className='input-length-error-msg'>Comments must be greater than 10 characters</p>
            </div>
         </form>
        </div>
    )
}

export default FeedbackForm