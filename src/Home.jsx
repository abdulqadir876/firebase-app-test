import React, { useEffect, useState } from 'react'
import { Routes, Route} from "react-router-dom";

import {db} from './firebase'
import {addDoc, collection, getDocs} from 'firebase/firestore'
import {AiFillGithub} from 'react-icons/ai'
import {BiLinkExternal} from 'react-icons/bi'
import Post from './Post';
import { async } from '@firebase/util';

const Home = () => {
  const [projects, setProjects] = useState([])
  const [title, setTitle] = useState("")
  const projectCollectionRef = collection(db, 'projects')

// create new projects
  const createProject = async () => {
    await addDoc(projectCollectionRef, { title: title });
  };

  useEffect(()=>{
    // Fetch Data from Firebase
    const getProjects = async () =>{
      const data = await getDocs(projectCollectionRef)
      setProjects(data.docs.map(doc => ({...doc.data(), id: doc.id})))
      console.log(projects)
    }

    getProjects()
  },[])

  return (
    <>
   
    <div className='m-16 flex gap-3'>
      {projects.map((project)=>(
        <div className="p-6 max-w-sm bg-gray-100 rounded-lg  shadow w-[300px] relative">
          <div className='flex justify-between items-center'>
            <h5 className="mb-2 text-2xl tracking-tight text-blue-700">{project.title}</h5>
            <div className='flex gap-2'>
              <div>
                {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <AiFillGithub size={20}/>
                </a>

                )}
              </div>
              <div>
                {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <BiLinkExternal size={20}/>
                </a>
                )}
              </div>
            </div>
          </div>
          <p className="mb-3 my-4 font-normal text-gray-700 overflow-auto line-calm">{project.info}</p>

         <div className='flex gap-2 absolute bottom-3 mt-2'>
         {project.tags && project.tags.map(tag => (
           <span className='bg-purple-600 text-white px-2  rounded-sm'>{tag}</span>
          ))}
         </div>
        </div>
      ))}

    </div>
    </>
 
  )
}

export default Home