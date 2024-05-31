import React, { useRef } from 'react'
import Card from './Card'

function Foreground() {
    
    const ref = useRef(null);

    const data = [
        {
            decs: "This is the Background color of the card that will be displayed. ",
            fileSize: "0.9mb",
            close: false,
            tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" }
        },
        {
            decs: "This is the Background color of the card that will be displayed. ",
            fileSize: "0.9mb",
            close: false,
            tag: { isOpen: true, tagTitle: "Kuch Bhi", tagColor: "blue" }
        },
        {
            decs: "This is the Background color of the card that will be displayed. ",
            fileSize: "0.9mb",
            close: true,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" }
        }
    ]
    return (
        <div ref={ref} className=' w-full h-screen fixed z-[3] top-0 left-0 p-5 flex gap-10 flex-wrap'>
            {/* <Card /> */}
            {data.map((item,index)=>(
                <Card data={item} reference={ref} />
            ))}
        </div>
    )
}

export default Foreground