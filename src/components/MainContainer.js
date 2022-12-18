import React from 'react'
import BgImg from '../img/bgImg.png'
import Img1 from '../img/img1.png'

const MainContainer = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-2 bg-[url("https://themelooks.net/demo/foodbook/wp-content/uploads/2021/01/banner_bg.png")]'>
      <div className='py-2 flex-1 w-auto flex flex-col col-span-2 items-start md:items-center justify-center'>
        <div className='items-center gap-2 justify-center'>
          <p className='text-5xl font-bold text-orange-500 py-12'><em>“Perfect Taste, everytime!”</em></p>
          <p>Hungry? You’re in the right place*</p>
        </div>
      </div>
      <div className='flex-1 items-center justify-center w-auto px-14 py-10'>
        
        <img src={Img1} className='rounded-full' alt='BG1' />
      </div>
    </div>
  )
}

export default MainContainer
