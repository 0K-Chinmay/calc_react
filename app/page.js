"use client";
import React,{useState} from 'react'
import Image from 'next/image'
import './globals.css'
export default function page() {
  const [result, setresult] = useState(' ');
  const getnum=((e)=>{
    setresult(result.concat(e.target.name));
       console.log(e.target.name);
  }) 
  const getresult=(()=>{
    try {
      setresult(eval(result).toString());
    } catch (err) {
        setresult('error');
    }
      
  })
  const clc=(()=>{
     setresult(' ');
  })
  const del=(()=>{
    setresult(result.slice(0,-1));
  })
   return (
   <div className='h-screen'>
   <Image
    className=' bg-white h-screen opacity-50 bg-contain'
     src="/bg.svg"
     objectFit='cover'
     layout="fill"
    />-
    <div className=' box py-12 px-8 bg-slate-900 rounded-xl'>
    <div>
     <div className=' bg-slate-900 px-2 pt-11 rounded h-20 mb-11 text-white  text-4xl text-right'>{result}</div>
     <div className='keypad grid '>
     <button name='clc' onClick={clc} className='buttons h-20 col-span-2 bg-cyan-500 '>AC</button>
     <button name='del' onClick={del} className='buttons h-20 bg-cyan-500'>C</button>
     <button name='+' onClick={getnum} className='buttons h-20 bg-cyan-500'>+</button>
     <button name='1' onClick={getnum} className='buttons h-20 bg-cyan-900'>1</button>
     <button name='2' onClick={getnum} className='buttons h-20 bg-cyan-900'>2</button>
     <button name='3' onClick={getnum} className='buttons h-20 bg-cyan-900'>3</button>
     <button name='-' onClick={getnum} className='buttons h-20 bg-cyan-500'>&ndash;</button>
     <button name='4' onClick={getnum} className='buttons h-20 bg-cyan-900 '>4</button>
     <button name='5' onClick={getnum} className='buttons h-20 bg-cyan-900'>5</button>
     <button name='6' onClick={getnum} className='buttons h-20 bg-cyan-900'>6</button>
     <button name='*' onClick={getnum} className='buttons h-20 bg-cyan-500'>&times;</button>
     <button name='7' onClick={getnum} className='buttons h-20 bg-cyan-900'>7</button>
     <button name='8' onClick={getnum} className='buttons h-20 bg-cyan-900'>8</button>
     <button name='9' onClick={getnum} className='buttons h-20 bg-cyan-900'>9</button>
     <button name='/' onClick={getnum} className='buttons h-20 bg-cyan-500'>&divide;</button>
     <button name='0' onClick={getnum} className='buttons h-20 bg-cyan-900'>0</button>
     <button name='.' onClick={getnum} className='buttons h-20 bg-cyan-900'>.</button>
     <button name='=' onClick={getresult} className='buttons h-20 col-span-2 bg-cyan-500'>=</button>
     </div>
    </div>
  </div>
   </div>
   )
 }