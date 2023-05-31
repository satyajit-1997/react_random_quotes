import React from 'react'

function Buttons(props) {
  return (
    <div className='buttons'>
      <button 
      id= {props.id}
      backgroundColor = {props.color}
     onClick={props.handleClick} 
      style={{color:"white" , backgroundColor:props.color}} className='button' > New Quote </button>
            </div>
  )
}

export default Buttons;