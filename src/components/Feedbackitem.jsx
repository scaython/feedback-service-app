import React from 'react'
import Card from './shared/Card'







function Feedbackitem({item,deleteFeedBack}) {
 
 return (
    <Card className="card" item={item} deleteFeedBack={deleteFeedBack}/>
  )
}

export default Feedbackitem