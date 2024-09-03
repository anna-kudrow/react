import './App.css'
import Message from './components/message/Message'


const messages = [{id: 1, text: 'Happily message'}, {id: 2, text: 'Adv message'}, {id: 3, text: 'Informative message'}]

function App() {
  return (
   <>
   <ul>
       <h1 className='title'>Messages</h1>
       <Message {...messages[0]}/>
       <Message id={messages[1].id} text={messages[1].text}/>
       <Message id={messages[2].id} text={messages[2].text}/>
   </ul>
   </>
  )
}

export default App
