import React from 'react'
import designx from '../Assets/Images/designXlogo.svg'
import dfos from '../Assets/Images/DFOS.svg'
const Header = () => {
  return (
    <div>
      <div className='flex justify-between items-center mx-[12px] my-[20px]'>
        <img src={designx} alt="" className='w-[187px] h-[36px]'/>
        <img src={dfos} alt="" className='w-[36px] h-[36px]'/>
      </div>
      <hr className='mx-[12px] border-[1px] border-solid border-[#AAAAAA]'/>
    </div>
  )
}

export default Header
