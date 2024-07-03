import React from 'react'

function Card({img,purpose,organiser}) {
  return (
    <div>
        <div className='flex flex-col p-3 border-solid border-black border-[2px] rounded-[10px] gap-4 bg-slate-200 shadow-2xl'>
            <div className=' flex justify-center items-center'><img className='w-[200px] h-[200px]' src={img}></img></div>
            <div className='flex flex-col'>
                <div><h1 className='text-[15px] font-bold'>{purpose}</h1></div>
                <div className='flex items-center gap-4 mt-1'>
                    <div className=' flex justify-center items-center '><img className='w-[40px] h-[40px] rounded-full' src="./profile1.jpg"></img></div>
                    <div><p>by {organiser}</p></div>
                </div>
                <div className='flex flex-col'>
                     <h1 className='text-slate-500'><span className='font-bold text-black '>₹20,73,346</span>  raised</h1>
                     <p className='text-slate-500'>Last donation 4 hours ago</p>
                </div>
            </div>
            <div className='flex justify-between mt-2'>
                <div><span className='font-bold'>11</span> Days Left</div>
                <div><span className='font-bold'>1115</span>  Supporters</div>
            </div>
        </div>
    </div>
  )
}

export default Card