import React, { useContext } from 'react'
import Feedbackitem from './Feedbackitem'
import {motion,AnimatePresence} from "framer-motion"
import FeedBackContext from '../context/FeedBackContext'

function FeedbackList() {
  
  const {feedback} = useContext(FeedBackContext)

  if(!feedback || feedback.length===0){
     return <p>No feedback yet</p>
  }

  return (
    <div className='feedback-list'>
        <AnimatePresence>
         {feedback.map((item)=>(
          <motion.div 
           key={item.id}
           initial={{opacity:0, scale:0.5}}
           animate={{opacity:1, scale:1}}
           transition={{duration:0.5}}
           exit={{opacity:0}}
           >
              <Feedbackitem key={item.id} item={item}/>
          </motion.div>
         ))}
        </AnimatePresence>
    </div>
  )
}

export default FeedbackList