import React from 'react'

const Title = ({text1, text2}) => {
  return (
    <div className='w-full inline-flex gap-2 items-center mb-3'>
        <p className='prata-regular text-[#800020] text-3xl sm:text-5xl'>{text1} <span className='prata-regular text-[#D4AF37] font-medium'>{text2}</span></p>
        <p className='w-full sm:w-3/4 h-[1px] sm:h-[2px] bg-gray-700'></p>
    </div>
  )
}

export default Title