import React from 'react'

interface Blockprops{
  value?: string | null;
  onClick?:()=>void
}

const Block:React.FC<Blockprops> = (props) => {
  return (
    <div onClick={props.onClick} className=' border-2 border-gray-900 h-24 w-24 cursor-pointer font-bold flex justify-center items-center text-6xl '>{props.value}</div>
  )
}

export default Block