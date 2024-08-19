import React from 'react'

function Pile({selected,svg,text,...props}) {


  return (
    <div className={`flex items-center ${selected && 'bg-[#F3E8FF]'} ${ selected?"text-primary":'text-[#646464]'} rounded-tr-md rounded-br-md px-4 py-0.5 my-2 ${!selected && 'hover:bg-[#cec7d9]'} cursor-pointer`} {...props}>
        <div className={`${selected?'bg-[#F3E8FF]':''} rounded-full w-8 h-8 flex items-center justify-center`}>
        <img src={svg}/>
      </div>
      <div>
      <span className="ml-2 text-sm font-medium">{text}</span>
      </div>
    </div>
  )
}

export default Pile