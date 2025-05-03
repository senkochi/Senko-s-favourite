import React, { useState } from 'react';
import Logo from '../../assets/logo.jpg';
import IonIcon from '@reacticons/ionicons';

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className='flex justify-between items-center bg-amber-200 fixed top-0 left-0 w-full z-50 shadow-2xl font-heading'>
        <div> 
            <a className='flex items-center' href="/">
                <img className='w-16 rounded-full mx-2' src={Logo} alt="Logo" />
                <h1 className='text-orange-400 font-bold'>Senko</h1>
            </a>
        </div>
        <div className={`md:static fixed left-0 top-0 z-16 bg-amber-200 md:min-h-fit min-h-screen md:w-auto w-[40%] shadow-2xl md:shadow-none md:flex
                         ${menuOpen ? 'flex' : 'hidden'} `}>
            <div className='flex flex-col mx-3 w-full'>
              <h2 className='text-xl font-bold py-8 md:hidden'>Menu</h2>
              <ul className='flex md:flex-row flex-col md:items-center md:gap-[4vw] px-3 w-full'>
                  <li className='md:w-auto w-full'>
                    <a href="/" className='w-full'>
                        <div className='flex items-center justify-between w-full hover:bg-amber-400 px-3 py-5 rounded-2xl'>
                            <p>Home</p>
                            <div className='md:hidden'>
                                <IonIcon name='chevron-forward-outline'></IonIcon>
                            </div>
                        </div>
                    </a>
                  </li>
                  <li className='md:w-auto w-full'>
                    <a href="/products" className='w-full'>
                        <div className='flex items-center justify-between w-full hover:bg-amber-400 px-3 py-5 rounded-2xl'>
                            <p>Products</p>
                            <div className='md:hidden'>
                                <IonIcon name='chevron-forward-outline'></IonIcon>
                            </div>
                        </div>
                    </a>
                  </li>
                  <li className='md:w-auto w-full'>
                    <a href="/characters" className='w-full'>
                        <div className='flex items-center justify-between w-full hover:bg-amber-400 px-3 py-5 rounded-2xl'>
                            <p>Characters</p>
                            <div className='md:hidden'>
                                <IonIcon name='chevron-forward-outline'></IonIcon>
                            </div>
                        </div>
                    </a>
                  </li>
                  <li className='md:w-auto w-full'>
                    <a href="/about" className='w-full'>
                        <div className='flex items-center justify-between w-full hover:bg-amber-400 px-3 py-5 rounded-2xl'>
                            <p>About</p>
                            <div className='md:hidden'>
                                <IonIcon name='chevron-forward-outline'></IonIcon>
                            </div>
                        </div>
                    </a>
                  </li>
                  <li className='md:w-auto w-full'>
                    <a href="/donate" className='w-full'>
                        <div className='flex items-center justify-between w-full hover:bg-amber-400 px-3 py-5 rounded-2xl'>
                            <p>Donate</p>
                            <div className='md:hidden'>
                                <IonIcon name='chevron-forward-outline'></IonIcon>
                            </div>
                        </div>
                    </a>
                  </li>
              </ul>
            </div>
            
        </div>
        <div className='flex items-center gap-6 mx-6'>
            <button className='bg-orange-400 px-4 py-2 rounded-full hover:bg-orange-300'>
                Sign in
            </button>
            <div className='md:hidden'>
                <IonIcon name={(menuOpen===false) ? "menu" : "close"} className='text-2xl cursor-pointer'
                            onClick={() => setMenuOpen(!menuOpen)}></IonIcon>
            </div>
        </div>
    </div>
  );
}

export default Navbar