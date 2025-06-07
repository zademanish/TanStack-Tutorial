import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='bg-slate-700 flex justify-between text-white text-xl px-3 py-2'>
        <div>
            <h2 className='text-xl text-white'>Logo</h2>
        </div>
            <ul className='flex gap-10'>
               <Link to='/'>
               
                <li>Home</li>
               </Link>
               <Link to="/trad">
                <li>FetchOld</li> 
               </Link>
               <Link to="/rq"> 
                <li>FetchRq</li>
               </Link>
            </ul>
        
    </header>
  )
}

export default Header