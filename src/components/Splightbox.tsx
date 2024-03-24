"use client"
import React, { useEffect, useState } from 'react'

const Splightbox = (props:any) => {
    const months = ['Jan' , 'Feb' , 'Mar' , 'Apr' , 'May' ,'Jun' , 'July' , 'Aug' , 'Sept','Oct' , 'Nov' , 'Dec'];
    const day = ['Sun','Mon' , 'Tus','Wed' , 'Thus' ,'Fri' , 'Sat'];
    const [days , setDays]:any = useState({
       month:'',
       year:'',
       day:'',
       date:'',
       time:'',

    })
    useEffect(() => {
        const updateDateTime = () => {
            const newData = new Date();
            setDays((prev: any) => ({
                ...prev,
                month: months[newData.getMonth()],
                year: newData.getFullYear(),
                day: day[newData.getDay()],
                date: newData.getDate(),
                time: newData.toLocaleTimeString(),
            }));
        };

        updateDateTime(); // Update immediately on mount

        const intervalId = setInterval(updateDateTime, 1000); // Update every second

        return () => clearInterval(intervalId); // Cleanup on unmount
    }, []);
    
  return (
    <div className='w-[250px]  p-2 bg-black m-2 text-center'>
    <img className='mb-10 w-[250px] h-[300px]' src={props.src} alt='profile' />
    <p className='mb-5 text-lg'>{props.name}</p>
    <div className='flex'>
      <p>{days.month}</p> 
      <p className='ml-2 mr-2'>|</p>
      <p>{days.date}</p>
      <p  className='ml-2 mr-2'>|</p>
      <p>{days.day}</p>
      <p className='ml-2 mr-2'>|</p>
      <p>{days.time}</p>
    </div>
    <div>{props.details}</div>
    <button className='w-[200px] h-[45px] bg-gray-700 text-white text-center'>{props.btn}</button>
 </div>
  )
}

export default Splightbox
