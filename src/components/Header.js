import React from 'react'
const Header = () => {
  return (
    <>
      <header className='bg-[#bcfdff] rounded-2xl flex flex-col items-center justify-center space-y-5 p-5 lg:py-10 border-4 border-[#00214d] '>
        {/* <img src={logo} className="App-logo mx-auto h-40" alt="logo" /> */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-20 h-20 App-logo">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
        </svg>

        <h1 className="mb-4 text-3xl font-extrabold text-[#00214d] md:text-5xl lg:text-6xl"> React Todos</h1>
        <div className='max-w-2xl w-full'>
          <form className="flex items-center">   
            <label htmlFor="voice-search" className="sr-only">Search</label>
            <div className="relative w-full">
                {/* <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                </div> */}
                <input type="text" id="voice-search" className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-[#00214d] focus:border-[#00214d] block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#00214d] dark:focus:border-[#00214d]" placeholder="Task To Do..." required />
                <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <svg aria-hidden="true" className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd"></path></svg>
                </button>
            </div>
            <button type="submit" className="inline-flex items-center py-2.5 px-3 ml-2 text-sm whitespace-nowrap font-medium text-white bg-[#00214d] rounded-lg border border-[#00214d] hover:bg-[#00214d] focus:ring-4 focus:outline-none focus:ring-[#00214d] dark:bg-[#00214d] dark:hover:bg-[#00214d] dark:focus:ring-[#00214d]">
               + Add Todo
            </button>
          </form>
        </div>
      </header>
    </>
  )
}

export default Header