import { NotebookPen, Trash } from 'lucide-react'
import React from 'react'

const NoteCard = ({title, content, created_at}) => {
    const lineClamper = (line_to_be_clamped) => {
        const clamped_line = line_to_be_clamped.slice(0, 45) + "...";
        return clamped_line;
    }
  return (
    <div className="Card shadow-lg bg-base-200 rounded-md w-fit flex gap-4 items-end p-4">
        <div className="Main">
            <div className="Text flex flex-col">
                <h1 className='text-2xl font-semibold'>{title}</h1>
                <span className='text-md'>{lineClamper(content)}</span>
                <span>{created_at}</span>
            </div>
        </div>
        <div className="Other flex gap-2 items-center ">
            <button className='bg-red-300 text-red-700 rounded-md p-1'>
                <Trash />
            </button>
            <button className='rounded-md text-white bg-gray-900 p-1'>
                <NotebookPen />
            </button>
        </div>
    </div>
  )
}

export default NoteCard