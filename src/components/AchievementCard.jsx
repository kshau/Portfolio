import React, { Suspense } from 'react';

function AchievementCard(props) {

    const {event, award, date, image, right, animDelay} = props;

    const line = <div className="h-[10px] w-[70px] bg-yellow-500 left-[50vw] mt-[130px] drop-shadow-lg"></div>

    return (
        <>

            <div className={`flex flex-row ${(right) ? ("mt-[250px]") : ("mb-[250px]")} animate-fadeIn opacity-0`} style={{animationDelay: animDelay}}>

                {(right) ? (line) : ("")}

                <a className={`bg-card-bg w-[400px] flex flex-col w-fit rounded-[20px] font-bold py-[10px] m-[15px] drop-shadow-lg`}>

                    <img src={image} className="w-[280px] h-[150px] m-[20px] rounded-[20px] border border-white border-[2px] object-cover self-center mb-[30px]"/>

                    <div className="text-center mb-[10px] flex flex-col w-[375px]">
                        <span className="text-[25px] text-white">{event}</span>
                        <span className="text-[18px] text-red-300">{award}</span>
                        <div className='flex justify-center'>
                            <span className='text-[15px] text-yellow-500 mt-[20px] bg-achievement-date-bg w-fit p-[5px] px-[10px] rounded-[20px]'>{date}</span>
                        </div>
                    </div>

                </a>

                {(right) ? ("") : (line)}

            </div>

        </>
    )

}

export default AchievementCard;
