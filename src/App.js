import React, { useState } from 'react'
import CreateNote from './components/CreateNote/CreateNote'
import Note from './components/Note/Note'
import "./App.css"
const App = () => {
  const [addItem,setAddItem] = useState(() => JSON.parse(localStorage.getItem("addItem")) || [])

const createNote =(note) => {

  setAddItem((oldData )  => {

    return [...oldData,note];
  } )
  
};

  React.useEffect(()=>{
  localStorage.setItem("addItem", JSON.stringify(addItem))
},[addItem])   

const deleteNote = (id) => {
setAddItem((data) => 
  data.filter((value,index) => {

    return index !== id

  }))
};


return (
  <div>
       <h1>Notify Me....</h1>
      <CreateNote passNote={createNote}/>
      <div className='inlineNote'>

    {
      addItem.map((value,index) =>{
   
              
        return(
          <Note title = {value.title} id={index} content={value.content} delete={deleteNote} key={index}/>
        )
      })
    }
    
     
      </div>
    </div>
  )
}

export default App
