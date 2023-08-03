import React from 'react'
import Single from '../../assets/single.png'
import Double from '../../assets/double.png'
import Triple from '../../assets/triple.png'

const Cards = () => {
    return (
        <div className='w-full py-[10rem] px-4 bg-white'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                <div className='w-full  shadow-2xl flex flex-col p-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto   bg-white' src={Single} alt="" />
                    <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                    <p className='text-center text-4xl font-bold '>500$</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>500GB Storage</p>
                        <p className='py-2 border-b mx-8'>1 Granted User</p>
                        <p className='py-2 border-b mx-8'>Send up to 2Gb</p>
                    </div>
                    <div className="text-center">
                    <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3 hover:bg-[#00ffae] ease-in-out duration-200'>Start trial</button>

                    </div>
                </div>
                {/*  */}
                <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto   bg-transparent' src={Double} alt="" />
                    <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                    <p className='text-center text-4xl font-bold '>500$</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>500GB Storage</p>
                        <p className='py-2 border-b mx-8'>1 Granted User</p>
                        <p className='py-2 border-b mx-8'>Send up to 2Gb</p>
                    </div>
                    <div className="text-center">
                    <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3 hover:bg-[#00ffae] ease-in-out duration-200'>Start trial</button>

                    </div>
                </div>
                {/*  */}
                <div className='w-full  shadow-2xl flex flex-col p-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto   bg-white' src={Triple} alt="" />
                    <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                    <p className='text-center text-4xl font-bold '>500$</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>500GB Storage</p>
                        <p className='py-2 border-b mx-8'>1 Granted User</p>
                        <p className='py-2 border-b mx-8'>Send up to 2Gb</p>
                    </div>
                    <div className="text-center">
                    <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3 hover:bg-[#00ffae] ease-in-out duration-200'>Start trial</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards