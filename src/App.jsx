import React, { useState } from 'react'

const App = () => {
  const navName = ["Home", "About", "Projects"]
  const [dark, setDark] = useState(true)
  console.log(dark)


  return (
    <div className={`${dark && "dark"}`}>
      <header className='w-[90%] border-2 m-auto flex justify-end dark:bg-neutral-900'>
        <nav className='flex gap-5'>
          <ul className='flex  my-9  gap-5 text-xl '>
            {navName.map((item, index) => {
              return <li className='dark:text-slate-100' key={index}><a href=''>{item}</a></li>
            })}
          </ul>
          <button className='border-dashed border-2 my-5 py-2 px-6 bg-slate-950 text-slate-300 dark:bg-slate-300 dark:text-slate-900' onClick={() => setDark(!dark)}>
            dark
          </button>

        </nav>
      </header>
      <main className='border-2 flex flex-col w-[90%] m-auto items-center mt-36 dark:bg-neutral-900'>
        <section className='gap-y-8 flex flex-col '>
          <h1 className='font-semibold text-blue-600 text-7xl'>
            A design conference for the dark side
          </h1>
          <p className='text-sky-800 text-2xl tracking-wide leading-relaxed dark:text-neutral-300'>
            The next generation of web users are tech-savvy and suspicious. They know
          </p>
        </section>
      </main>
    </div >
  )
}

export default App