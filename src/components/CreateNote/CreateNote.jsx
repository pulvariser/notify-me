import React, { useState } from 'react'
import "./CreateNote.css"
const CreateNote = (props) => {

      const [note, setNote] = useState({
        title : "",
        content:"",
      });
const inputHandler =(e) => {
       const {value,name} = e.target;
  

  setNote( (prevData) => {
    return{
    ...prevData,

    [name]:value,
  };
  });


};
const createNoteHandler =(e) =>{
  e.preventDefault()
   props.passNote(note)
   setNote({ 
             title : "",
             content:"",

   } )
}




  return (
  
      <div className="createnote-container">
        <div className='createnote'>
      <form  >

        <input type="text"  required={true} name="title"  placeholder='Add a note here' value={note.title} onChange={inputHandler} autoComplete='off' />
         
        <textarea name="content" required={true} rows="8"  placeholder='Put what is in your mind here...!' onChange={inputHandler} value={note.content} ></textarea>
         
       

       
        <button  onClick={createNoteHandler}>Add Note</button>
      
        </form>
        </div>
          </div> 
      
  )
}

export default CreateNote
