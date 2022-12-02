import { Dropdown } from 'flowbite-react'
import React, { useState} from 'react'

const Task = ({id,status, title, dispatch}) => {
    const [openMenu, setMenu] = useState(false)
  return (
    <div className='bg-white flex items-center justify-between text-left border-2 border-[#00214d] p-5 rounded-lg w-full'>
        <h1 className='text-lg font-medium text-[#00214d]'>{title}</h1>
        <div className='relative'>
        <button onClick={() => {
            console.log("Click")
            setMenu(!openMenu)
        }} className="inline-flex relative items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button"> 
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
            </button>
            {
               openMenu && <><div className='fixed inset-0 z-10 transition  duration-500 bg-gray-50/50 backdrop-filter backdrop-blur-sm'></div> <div id="dropdownDots" className=" z-10 w-44 absolute top-12 right-0 border-2 border-[#00214d] p-2  rounded-lg bg-white  divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconButton">
                <li>
                    <button className="block py-2 w-full text-left px-4 hover:bg-gray-100 rounded-md dark:hover:bg-gray-600 dark:hover:text-white">In Progress</button>
                </li>
                <li>
                    <button className="block py-2 w-full text-left px-4 hover:bg-gray-100 rounded-md dark:hover:bg-gray-600 dark:hover:text-white">Completed</button>
                </li>
                </ul>
                <div className="py-1">
                    <button className="block py-2 px-4 text-sm text-red-500 w-full text-left hover:bg-red-100 rounded-lg dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</button>
                    <button onClick={()=>{
                        dispatch({type: 'deleted'})
                        console.log("delete Clicked")
                        setMenu(!openMenu)
                        }} className="block py-2 px-4 w-full text-left rounded-lg text-sm text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Cancel</button>
                
                </div>
            </div>
            </>
            }
        </div>
    </div>
  )
}

export default Task