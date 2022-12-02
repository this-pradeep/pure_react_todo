import React from 'react'

const TasksList = ({status, children}) => {
  return (
    <>
    <div className={`bg-${status === 'inProgress' ? '[#fde24f]': status === 'completed' ? '[#00ebc7]':'[#ff5470]' } rounded-2xl flex flex-col items-center justify-start space-y-5 p-5 border-4 border-[#00214d]`}>
        <h1 className='text-2xl font-medium uppercase'>{status === 'inProgress' ? 'In Progress': status === 'completed' ? 'Completed':'Open' }</h1>
        <div className='flex flex-col items-center space-y-2 justify-center w-full'>
          {children}
        </div>
    </div>
    </>
  )
}

export default TasksList