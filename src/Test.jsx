import { useEffect, useState } from "react";


import "./App.css";
import { db } from "./firebase";



export default function App() {
const [todos, setTodos] = useState(['Test 1', 'Test 2'])
const [input, setInput] = useState('')

const handleBtn = () =>{
  setTodos([...todos, input])
  setInput("")
}

    useEffect(() => {
      db.collection('users').onSnapshot(snapshot => {
        setTodos(snapshot.docs.map(doc => doc.data()))
        
      })  
    }, []);

  return (
    <div className="App" style={{marginTop: '50px'}}>
     <input value={input} onChange={(e)=>setInput(e.target.value)} type="text" className='border-2 border-blue-500'/>
     <button disabled={!input} onClick={handleBtn} className='bg-blue-500 px-2 py-2 block mt-3 rounded hover:bg-red-500'>Submit</button>
    
      {todos.map(todo =>(
        <li>{todo}</li>
      ))}
    </div>
  );
}
// export default App;
