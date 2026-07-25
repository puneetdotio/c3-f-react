import React, { useContext } from 'react'
import { MyShop } from '../context/MyWebsite'

const Navbar = () => {
    let {setIsCartOpen} = useContext(MyShop)


  return (
		<div className='bg-amber-400 px-5 py-2 flex items-center justify-between rounded-2xl'>
			<div className='h-10 w-10 rounded-full bg-gray-500'>
              <img 
                    className='w-full h-full object-cover rounded-full'
                  src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="profile logo"
				/>
          </div>
          <div className='flex gap-10'>
            <p onClick={() => setIsCartOpen(false)} className='text-xl cursor-pointer font-semibold'>Product </p>
            <p onClick={() => setIsCartOpen(true)} className='text-xl cursor-pointer font-semibold'>Cart </p>
          </div>
          <button className='bg-blue-700 text-blue-100 px-3 py-1 rounded-2xl font-semibold'>Login</button>
		</div>
	);
}

export default Navbar