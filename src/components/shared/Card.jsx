import React , { useContext } from 'react'
import {FaTimes} from "react-icons/fa"
import FeedBackContext from '../../context/FeedBackContext'


function Card({item}) {
  
  const {deleteFeedBack} = useContext(FeedBackContext) 

  return (
    <div className='card'>
        <div className="num-display">{item.rating}</div>
        <div className="text-display">{item.text}</div>
        <button className='close' onClick={()=>deleteFeedBack(item.id)}>
          <FaTimes color='red'/>
        </button>
    </div>
  )
}

export default Card