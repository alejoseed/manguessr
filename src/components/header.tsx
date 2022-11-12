import React from 'react';
import {useState} from 'react';

const logo = require('./logo.svg') as string;

function NavBarItems(){
    const [isOpen, setIsOpen] = useState(false);
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

            </div>
        </nav>  
    );
}


export default Header