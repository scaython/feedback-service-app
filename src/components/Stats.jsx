import React , { useContext } from 'react'
import FeedBackContext from '../context/FeedBackContext'

function Stats() {
  
  const {feedback} = useContext(FeedBackContext)
  
  // calculate avg of ratings
 
    let avg = feedback.reduce((acc,curr)=>{
        return  acc+curr.rating
    },0)/feedback.length
    
   
  
   if(!isNaN(avg)){
    return (
        <div className='feedback-stats'>
          <h4>
            {feedback.length} Reviews
          </h4>
          <h4 className='clip-star'>
             {avg}
          </h4>
        </div>
        
      )
   }

}

export default Stats