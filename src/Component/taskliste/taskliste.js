import React from 'react'
import './taskliste.css'
 function TaskListe (props) {
  return (
    <div className='row' >
<div className='col-lg-5 offset-lg-4 ti'>
    <span>{props.contnet.text}</span>
</div>
    </div>
  )
}
export default TaskListe;
