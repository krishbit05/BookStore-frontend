import React from 'react'

function Cards({item}) {
  return (
    <div className='p-2 bg-red-100 dark:bg-red-300 rounded-md transition-transform duration-300 scale-95 hover:scale-100 dark:text-black'>
      <div className='flex justify-center'>
        <img className="rounded-lg" src={item.image} alt="#" />
      </div>
      <div className='flex flex-col ml-2 '>
        <div className='flex gap-1 items-center px-2 pt-2'>
          <div className='text-xl'>{item.name}</div>
          <div className='bg-pink-500 rounded-lg px-1'>{item.category}</div>
        </div>
        <p className='ml-2 py-2'>
          {item.title}
        </p>
        <div className='flex justify-between px-2'>
          <button className='border-2 px-1 md:px-3 rounded-md md:rounded-full border-black hover:bg-pink-500 transition-all ease-in-out'>${item.price}</button>
          <button className='border-2 px-1 md:px-3 rounded-md md:rounded-full border-black hover:bg-pink-500 transition-all ease-in-out'>buy now</button>
        </div>
      </div>

    </div>
  )
}

export default Cards