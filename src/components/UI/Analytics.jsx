import React from 'react'
import Laptop from '../../assets/laptop.jpg';



const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
           <img className="w-[600px] mx-auto my-4" src={Laptop} alt="laptop" />
            <div className="flex flex-col justify-center sm:text-center md:text-left">
                <p className="text-[#00df9a] font-bold">Data analytics dashboard</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id ex cupiditate doloremque quia esse aliquid repellat ullam corporis, officiis repudiandae similique totam autem reiciendis iusto voluptate quis unde at voluptas.</p>
                <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium  my-6 mx-auto md:mx-0 sm:text-center py-3  hover:bg-[#00df9a] hover:text-black ease-in-out duration-200'>Get started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics