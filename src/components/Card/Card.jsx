import React from 'react'
import "./Card.css"
export default function Card({ popular, rating, votes, price, name, image, available }) {
    return (
        <div className='todo p-2 md:w-1/4 sm:w-1/3 flex flex-col justify-center'>
            <div className='todo overflow-hidden '>
                {popular && (
                    <p className='text-xs mt-2 ml-1 rounded-xl px-2 absolute  popu'>Popular</p>
                )}
                <img className="rounded-xl image hover:scale-110 hover:rounded-xl transition-transform duration-200 md:w-full" src={image} alt="" />
            </div>
            <div className='todo flex flex-col gap-2'>
                <div className='todo flex justify-between mt-2'>
                    <span className='todo text-white'>{name}</span>
                    <span className='todo bg-green-200 text-center flex items-center h-5 px-1 text-xs rounded-sm font-semibold'>{price}</span>

                </div>
                <div className='todo flex justify-between'>
                    {rating ? (
                        <div className='todo  flex items-center gap-2'>
                            <img className='w-2/12 todo' src="/Star_fill.svg" alt="" />
                            <span className='todo text-white text-xs'>{rating}
                                <span className=' todo text-gray-500 ml-2'>{`(${votes}  votes) `}</span>
                            </span>
                        </div>
                    ) : (
                        <div className='todo flex items-center gap-2'>
                            <img className='w-2/12 todo' src="/Star.svg" alt="" />
                            <span className='todo text-gray-500 text-xs'>No ratings</span>
                        </div>
                    )}
                    {available === false &&
                        (

                            <span className='todo text-xs text-red-300'>Sold Out</span>
                        )
                    }

                </div>

            </div>
        </div>
    )
}
