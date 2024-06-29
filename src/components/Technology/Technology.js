import React from 'react'


const data = [
'HTML','CSS','JS','React','Tailwind'
]
const Technology = () => {
  return (
  
    <div className='mt-[50px]'>
        <div className='container mx-auto'>
        <h2 className='text-center mb-[25px] textMobile'>Technology Expertise</h2>
      <div className='flexCenter gap-[10px] flex-col technologyContainer'>
        {
          data.map((x,index)=>{
            return(
              <div key={index} className='w-[100px] h-[110px] bg-gradient-to-r from-amber-500 to-pink-500 rounded-[20px] flexCenter transition-all duration-600 ease-in hover:text-[30px] font-[800] '>
              <span className='text-white'>{x}</span>
               </div>
            )
          })
        }
        
        {/* <div className='w-[100px] h-[110px] leftAnimation bg-gradient-to-r from-amber-500 to-pink-500 rounded-[20px] flexCenter transition-all duration-600 ease-in hover:text-[30px] font-[800] '>
            <span className='text-white'>CSS</span>
        </div>
        <div className='w-[100px] h-[110px] rightAnimation bg-gradient-to-r from-amber-500 to-pink-500 rounded-[20px] flexCenter transition-all duration-600 ease-in hover:text-[30px] font-[800] '>
            <span className='text-white'>Js</span>
        </div>
        <div className='w-[100px] h-[110px]  leftAnimation bg-gradient-to-r from-amber-500 to-pink-500 rounded-[20px] flexCenter transition-all duration-600 ease-in hover:text-[30px] font-[800] '>
            <span className='text-white'>React</span>
        </div> */}
      </div>
      </div>
    </div>
  )
}

export default Technology
