import React from 'react'
import Image from 'next/image'

const Box = (props:any) => {
  return (
    <div className='w-[250px]  p-2 bg-black m-2'>
       <img className='mb-10' src={props.src} width={250} height={400} alt='profile' />
       <p className='mb-5 text-lg'>{props.name}</p>
        
        <div  className='flex justify-between bg-slate-400 pl-6 pr-6'>
            <div>
                <p>Total Events</p>
                <p>{props.events}</p>
            </div>
            <div>
                <p>Sports</p>
                <p>{props.sport}</p>
            </div>
        </div>
    </div>
  )
}

export default Box
