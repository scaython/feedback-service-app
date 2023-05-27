import { useState, createContext } from "react";
import {v4 as uuidv4} from "uuid"
 
const FeedBackContext=createContext()





export const FeedbackProvider=(props)=>{
  const [feedback,setFeedback] = useState([
    {
        id:1,
        text:"hello this is context",
        rating: 10
    },
    {
        id:2,
        text:"hello this is context",
        rating: 10
    },
    {
        id:3,
        text:"hello this is context",
        rating: 10
    }
  ])
  const addFeedBack= (newFeedBack)=>{
    setFeedback([newFeedBack,...feedback])
    newFeedBack.id=uuidv4() 
    console.log(newFeedBack)
  }
  const deleteFeedBack = (id)=>{
    console.log(id)
    if(window.confirm("Are you sure?")){
       setFeedback(feedback.filter((item)=>item.id!==id))
    }
}

  return(
    <FeedBackContext.Provider value={{feedback,deleteFeedBack,addFeedBack}}>
        {props.children}
    </FeedBackContext.Provider>
  )
}
export default FeedBackContext