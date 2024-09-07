import './App.css'
import { useState } from 'react'
import Button from './components/Button/Button'
import Message from './components/Message/Message'


const messages = [{id: 1, text: 'Happily message'}, {id: 2, text: 'Adv message'}, {id: 3, text: 'Informative message'}]

function App() {

  const [content, setContent] = useState("click the button");

  function handleClick (type) {
    setContent(type);
  }

  return (
   <>
   <ul>
       <h1 className='title'>Messages</h1>
       <Message {...messages[0]}/>
       <Message id={messages[1].id} text={messages[1].text}/>
       <Message id={messages[2].id} text={messages[2].text}/>
   </ul>
   <div className='btns'>
     <Button onclick={()=>handleClick('delete')}>Delete</Button>
     <Button onclick={()=>handleClick('add')}>Add</Button>
   </div>
   <p>{content}</p>
   
   </>
  )
}

export default App
