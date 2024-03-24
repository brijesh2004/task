"use client"
import Box from '@/components/Box'
import Splightbox from '@/components/Splightbox'
import React, { useEffect, useState } from 'react'

const sport = () => {
    const [index , setIndex] = useState(0);
    const [prevDis , setPrevDis] = useState(true);
    const [nextDis , setNextDis] = useState(false);
    const [windowSize , setWindowSize] = useState(0);
    const Del:any = [
        {
        src:'https://1.bp.blogspot.com/-jKQKjzKXBFY/XSA2bi8wZaI/AAAAAAAAAyA/yORT6KI0kH024FGMsbeRkMP-2acB1NX7QCLcBGAs/s1600/IMG_20190706_111524.jpg',
        name:'Rohit Sharma',
        details:"lorem ipson and more",
        btn:'Take Flight Collections'
        },
        {
            src:'https://wallpapercave.com/wp/wp6494059.jpg',
            name:'Virat Kohli',
            details:"lorem ipson and more",
            btn:'Take Flight Collections'
        },
        {
            src:'https://wallpapercave.com/wp/wp7110137.jpg',
            name:'Shubman Gill',
            details:"lorem ipson and more",
            btn:'Take Flight Collections'
        },
        {
            src:'https://images.news9live.com/wp-content/uploads/2023/07/cropped-Jaiswal-web-AP-7.png',
            name:'Yashaswi Jaiswal',
            details:"lorem ipson and more",
            btn:'Take Flight Collections'
        },
        {
            src:'https://wallpapercave.com/wp/wp6494059.jpg',
            name:'Virat Kohli',
            details:"lorem ipson and more",
            btn:'Take Flight Collections'
        },
        {
            src:'https://wallpapercave.com/wp/wp7110137.jpg',
            name:'Shubman Gill',
            details:"lorem ipson and more",
            btn:'Take Flight Collections'
        },
        {
            src:'https://images.news9live.com/wp-content/uploads/2023/07/cropped-Jaiswal-web-AP-7.png',
            name:'Yashaswi Jaiswal',
            details:"lorem ipson and more",
            btn:'Take Flight Collections'
        },
        {
            src:'https://1.bp.blogspot.com/-jKQKjzKXBFY/XSA2bi8wZaI/AAAAAAAAAyA/yORT6KI0kH024FGMsbeRkMP-2acB1NX7QCLcBGAs/s1600/IMG_20190706_111524.jpg',
            name:'Rohit Sharma',
            details:"lorem ipson and more",
            btn:'Take Flight Collections'
        },
        {
            src:'https://1.bp.blogspot.com/-jKQKjzKXBFY/XSA2bi8wZaI/AAAAAAAAAyA/yORT6KI0kH024FGMsbeRkMP-2acB1NX7QCLcBGAs/s1600/IMG_20190706_111524.jpg',
            name:'Rohit Sharma',
            details:"lorem ipson and more",
            btn:'Take Flight Collections'
        }
  ]


  const Next = () => {
     if(index+3>=Del.length){
        setNextDis(true);
     }
     else{
        setIndex(index+1);
     }
  }
  const Prev = () => {
    if(index<=0){
       setPrevDis(true);
    }
    else{
       setIndex(index-1);
    }
 }

 useEffect(() => {
    const handleResize = () => {
        setWindowSize(window.innerWidth)
      console.log(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <div>
      <h1 className='ml-[7%] mt-[100px]'>Sport</h1>
      <div className='flex m-10 justify-center flex-wrap'>
      <Box src="https://1.bp.blogspot.com/-jKQKjzKXBFY/XSA2bi8wZaI/AAAAAAAAAyA/yORT6KI0kH024FGMsbeRkMP-2acB1NX7QCLcBGAs/s1600/IMG_20190706_111524.jpg" name="Rohit Sharma" events="45" sport="Cricket"/>
      <Box src="https://1.bp.blogspot.com/-jKQKjzKXBFY/XSA2bi8wZaI/AAAAAAAAAyA/yORT6KI0kH024FGMsbeRkMP-2acB1NX7QCLcBGAs/s1600/IMG_20190706_111524.jpg" name="Rohit Sharma" events="45" sport="Cricket"/>
      <Box src="https://1.bp.blogspot.com/-jKQKjzKXBFY/XSA2bi8wZaI/AAAAAAAAAyA/yORT6KI0kH024FGMsbeRkMP-2acB1NX7QCLcBGAs/s1600/IMG_20190706_111524.jpg" name="Rohit Sharma" events="45" sport="Cricket"/>
      <Box src="https://1.bp.blogspot.com/-jKQKjzKXBFY/XSA2bi8wZaI/AAAAAAAAAyA/yORT6KI0kH024FGMsbeRkMP-2acB1NX7QCLcBGAs/s1600/IMG_20190706_111524.jpg" name="Rohit Sharma" events="45" sport="Cricket"/>
      <Box src="https://1.bp.blogspot.com/-jKQKjzKXBFY/XSA2bi8wZaI/AAAAAAAAAyA/yORT6KI0kH024FGMsbeRkMP-2acB1NX7QCLcBGAs/s1600/IMG_20190706_111524.jpg" name="Rohit Sharma" events="45" sport="Cricket"/>
      </div>
      <div className='text-center'>
        <button className='w-[150px] h-[45px] bg-blue-600 rounded text-white'>More</button>
      </div>

      <div className='text-center mt-16'>
          <h1 className='font-mono'>Collection Sportlight</h1>
          <p className='mt-10 mb-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, expedita.</p>
      </div>
      <div className='flex justify-center align-center text-center'>
        <button onClick={Prev} className='w-[70px] font-extrabold text-6xl  h-[80px] mt-[250px] border shadow-[50px]'>&laquo;</button>
        <Splightbox src={Del[index].src} name={Del[index].name} details={Del[index].details} btn={Del[index].btn}/>
        {
        windowSize>=670?
        <Splightbox src={Del[index+1].src} name={Del[index+1].name} details={Del[index+1].details} btn={Del[index+1].btn}/>
        :''
        }
        {
         windowSize>=900?
        <Splightbox src={Del[index+2].src} name={Del[index+2].name} details={Del[index+2].details} btn={Del[index+2].btn}/>
        :''
       }
       <button onClick={Next} className='w-[70px] font-extrabold text-6xl  h-[80px] mt-[250px] border shadow-[50px]'>&raquo;</button>
      </div>
    </div>
  )
}

export default sport

