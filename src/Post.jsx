import React, { useState } from 'react'
import {db} from './firebase'
import {collection, addDoc} from 'firebase/firestore'
import { async } from '@firebase/util';

const Post = () => {
    const [title, setTitle] = useState("")
    const [info, setInfo] = useState("")
    const [projects, setProjects] = useState([])
    const projectCollectionRef = collection(db, 'projects')

    const createPost = async () =>{
        // await addDoc(projectCollectionRef, { title: title});
        await addDoc(projectCollectionRef, { title: title });
        setTitle('')
    }
  return (
    <div className='w-[700px] mx-auto mt-10'>
                
       
            <div className="mb-6">
                <label for="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Title</label>
                <input type="text" value={title}  onChange={(event) => {
                    setTitle(event.target.value);}} className="form-input" />
            </div>
        
            <button disabled={!title} onClick={createPost} className="bg-blue-500 px-4 py-2">Submit</button>
      

    </div>
  )
}

export default Post