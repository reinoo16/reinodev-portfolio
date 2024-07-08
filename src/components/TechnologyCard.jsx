import React from 'react'

function TechnologyCard(props) {
    return (
        <div className='p-[30px] flex flex-col justify-between transition-all duration-300 hover:shadow-[0px_6px_9px_rgba(0,0,0,0.1)] rounded-[30px] border-[1px] w-full h-[330px] border-black20'>
            <div className='flex items-center w-[80px] h-[80px] justify-center rounded-[14px] border-[1px] border-black20'>
                <img src={props.icon} alt="" />
            </div>
            <div className='flex flex-col gap-[18px] w-full'>
                <h2 className='font-semibold text-[24px] leading-[100%] text-black w-full'>{props.title}</h2>
                <p className='font-normal text-[16px] leading-[100%] text-black70 w-full'>{props.description}</p>
            </div>
        </div>
    )
}

export default TechnologyCard