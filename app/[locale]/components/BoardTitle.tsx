import React from 'react'
import { inter, maruipol_bold } from "../../fonts/fonts";

const BoardTitle = () => {
    return (
        <h2 className={`${maruipol_bold.className} text-4xl md:text-4xl lg:text-5xl xl:text-6xl w-[320px] sm:w-[400px] md:w-[492px] lg:w-[602px] xl:w-[692px] mx-auto text-center relative`}>
            <span className='flex -rotate-[14deg] justify-center items-center absolute -translate-y-3/4 -translate-x-0 sm:-translate-x-1/3 lg:-translate-x-1/2 top-0 -left-6 lg:top-1 lg:left-12 w-20 lg:w-32 h-8 lg:h-11 text-xs lg:text-[18px] bg-best-yellow font-extrabold rounded-full'><span className='align-middle'>22 рада</span></span>
            <span className='whitespace-nowrap'>Виконавча рада —</span> <br />
            <span className='block text-lg md:text-xl lg:text-3xl xl:text-4xl mt-2 lg:mt-7'>Це Орган Управління Організацією.</span>
        </h2>
    )
}

export default BoardTitle