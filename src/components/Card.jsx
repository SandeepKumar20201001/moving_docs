import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

function Card({data , reference }) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.}} className=' relative flex-shrink-0 w-60 h-72 bg-zinc-900/90 rounded-[40px] text-white px-8 py-10 overflow-hidden'>
        <FaRegFileAlt/>
        <p className=' text-sm mt-5 leading-tight font-semibold'> {data.decs} </p>
        <div className='footer absolute w-full bottom-0 left-0 '>
            <div className='flex items-center justify-between px-8 py-3 mb-2'>
                <h5> {data.fileSize} </h5> 
                <span className='flex items-center justify-center bg-zinc-500 w-7 h-7 rounded-full'>
                    {data.close ? <IoClose size=".7em" color='#fff'/> : <MdOutlineFileDownload size=".7em" color='#fff' /> }
                </span>
            </div>

            {data.tag.isOpen && (
                <div className= {`tag w-full h-16 bg-${data.tag.tagColor}-500 flex items-center justify-center`} >  
                <h3 className=' text-sm font-semibold'> {data.tag.tagTitle} </h3>
            </div>
            ) }
            
        </div>
    </motion.div>

  )
}

export default Card