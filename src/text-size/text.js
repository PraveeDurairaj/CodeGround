import React from 'react'

const Text = () => {
  return (
    <div className='m-5'>
      {/* padding          */}
      <button className='p-2 bg-black text-white border-4 border-red-500'>4side</button>        
      <br/>
      <button className='px-2 bg-black text-white my-6 border-x-4 border-green-800'>X axis padding </button>
      <br/>
      <button className='py-2 bg-black text-white border-s-4 border-red-400'> Y axis padding</button>
      <br/>
      <button className='pt-5 bg-black text-white my-6'>padding top </button>
      <br/>
      <button className='pb-2 bg-black text-white '>padding bottom</button>
      <br/>
      <button className='pe-5 bg-black text-white my-6'>padding right</button>
      <br/>
      <button className='ps-5 bg-black text-white '>padding left</button>
    </div>
  )
}

export default Text
