import React from 'react'

function ExperienceCard(props) {
    return (
        <div className='flex flex-col gap-[14px] rounded-[30px] shadow-[0px_6px_9px_rgba(0,0,0,0.1)] border-[1px] border-black20 p-[30px] max-w-[520px] mx-auto md:mx-0 lg:h-[380px]'>
            <span className='p-[10px_28px] rounded-[20px] border-[1px] border-black20 w-fit text-[13px] font-normal text-black'>{props.history}</span>
            <h2 className='font-semibold text-[27px] text-black'>{props.job}</h2>
            <p className='font-normal text-[16px] text-black70'>{props.description}</p>
        </div>
    )
}

export default ExperienceCard