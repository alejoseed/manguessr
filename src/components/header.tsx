import React from 'react';
import logo from './logo.svg';
import { useState } from 'react';

const [isOpen, setIsOpen] = useState(false);

function HamburgerMenu(){
    return (
        <div>
            <button onClick={() => setIsOpen(!isOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
            </button>
        </div>

        
    );
}

function NavBarItems(){
    return (
        <div>
            <ul className="flex space-x-4 text-[#00ADB5] font-sans text-lg">
                <li>
                <a href="#" className="" aria-current="page">Home</a>
                </li>
                <li>
                <a href="#" className="">About</a>
                </li>
                <li>
                <a href="#" className="">Login</a>
                </li>
                <li>
                <a href="#" className="">Contact</a>
                </li>
            </ul>
        </div>
    );
}

function Header(){
    return (
        <nav className="bg-[#303841] border-gray-200 px-2 sm:px-4 py-2.5 ">
            <div className="flex items-center">
                <a href="/" className="flex items-center">
                    <img src={logo} alt="logo" className="text-yellow-300 wmr-3 h-9 sm:h-9"/>
                    <span className="text-white text-2xl font-light">NoName</span>
                </a>

                <div className='ml-auto items-center hidden md:block md:w-auto text-white text-2xl font-light'>
                    Play a cool game
                </div>

                <div className="hidden ml-auto w-full md:flex md:flex-row md:w-auto">
                    <NavBarItems/>
                </div>

                <div className='md:hidden ml-auto'>
                    <HamburgerMenu/>
                </div>

            </div>
        </nav>  
    );
}


export default Header