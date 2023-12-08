import React from 'react'
import "./Note.css"
import {AiFillDelete} from "react-icons/ai"
 
const Note = (props) => {

const deleteItem =  () =>{

  props.delete(props.id)

}

  return (
    <>
    <div className="note" >
     

      
                  <h3>{props.title}</h3>
      
       
     <p> {props.content}</p> 
      <div className="dele"><AiFillDelete  className ="deleteicon" size="25px" onClick={deleteItem}/></div>
    </div>
      </>
  )
}

export default Note
