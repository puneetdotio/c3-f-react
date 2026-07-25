import React, { useContext } from 'react'
import { MyShop } from '../context/MyWebsite';

const Navbar = () => {
    let {setIsCartOpen} = useContext(MyShop)

  return (
		<nav className='bg-amber-400 px-5 py-3 flex items-center justify-between rounded '>
			<div className=''>
              <img
                  className='w-10 rounded-full h-10'
					src="https://images.unsplash.com/photo-1783658439428-bc650ffec8f6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="logo image"
				/>
          </div>
          <div className='flex gap-10 text-xl'>
              <p onClick={() => setIsCartOpen(false)} className='cursor-pointer'>Product </p>
              <p onClick={() => setIsCartOpen(true)} className='cursor-pointer'>Cart </p>
          </div>
          <button className='bg-black text-white px-3 py-1 rounded-xl font-semibold'>Login</button>
		</nav>
	);
}

export default Navbar