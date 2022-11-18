import { Squash as Hamburger } from 'hamburger-react'
import React from 'react';
import {useState} from 'react';

function HamNavBar() {
    const [isOpen, setIsOpen] = useState(false);
    return(
        <div className='ml-auto md:hidden'>
            <Hamburger toggled={isOpen} toggle={setIsOpen} />
            {isOpen && (
                <div className="absolute bg-[#3894a3] rounded mt-2.5 
                right-0 w-auto h-auto pl-[3.5rem] pr-[1.5rem] pb-[1rem]
                 flex flex-col" >
                    <ul className='flex text-[black] flex-col self-end text-xl items-end space-y-8 pt-3 '>
                        <a href="#" className="hover:text-neutral-200 duration-[30ms]">
                            Home
                        </a>
                        <a href="#" className="hover:text-neutral-200 duration-[30ms]">
                            About
                        </a>
                        <a href="#" className="hover:text-neutral-200 duration-[30ms]">
                            Login
                        </a>
                        <a href="#" className="hover:text-neutral-200 duration-[30ms]">
                            Contact
                        </a>
                    </ul>

                </div>
            )}

        </div>
    );
}

export default HamNavBar

