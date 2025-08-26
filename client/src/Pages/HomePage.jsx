import {  LayoutGrid, Search, Sun } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import NoteCard from '../Components/NoteCard';

const HomePage = () => {
  const [notes, setNotes] = useState([]);
  const handleFetch = async () => {
    try{
      const res = await fetch(' http://127.0.0.1:5000/api/app/home')
      
      if (!res.ok){
        console.log(res)
        return toast.error('Unsucessfull Attempt at Getting Notes!')
      }

      const data = await res.json()
      const notes_data = data.notes;
      setNotes(notes_data);
      toast.success('Sucessfully Fetched data!');
      console.log(notes_data)


    }
    catch (e) {
      console.log(e)
      toast.error('Something went Wrong')
    }
  }
  useEffect(() => {
    handleFetch()
  }, [])
  return (
    <main className='overflow-x-hidden overflow-y-auto bg-base-300 w-full h-screen'>
        <section className=' flex gap-2 items-center m-2 justify-center sm:justify-end'>
          <input type="text" className='sm:w-1/3 w-fit bg-base-200 rounded-md p-1.5 ' placeholder='Search Notes by Name'/>
          <button className='bg-primary text-white p-2 rounded-md '>
            <Search />
          </button>
        </section>
        <section className='Recents m-4 '>
          <h1 className='text-2xl font-bold'>Recently Created! 📆</h1>
          <div className="CardGrid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  gap-4">
            {notes.map((note, idx) => (
              <NoteCard title={note.title} key={idx} content={note.content}/>
            ))}
          </div>
        </section>
    </main>
  )
}

export default HomePage;