import React from 'react'

const PrimaryButton = ({data,buttonStyle}) => {
  return (
    <button className={`bg-${buttonStyle.bg ? buttonStyle.bg : 'black'} text-${buttonStyle.textColor ? buttonStyle.textColor : 'white'} rounded-[55px] px-[24px] py-[5px]`}>
       {data}
    </button>
  )
}

export default PrimaryButton
