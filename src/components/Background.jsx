import React from 'react'

function Background() {
  return (
    <>
    <div className='fixed z-[2] w-full h-screen'>
    <div className=' absolute mt-[5%] w-full flex justify-center text-xl font-semibold text-zinc-300'>Documents</div>
      <h1 className=' absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-[12vw] leading-none tracking-tight font-semibold text-zinc-300'>Docs</h1>
    </div>
    </>
  )
}

export default Background