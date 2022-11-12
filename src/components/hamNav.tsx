import { Squash as Hamburger } from 'hamburger-react'
import React from 'react';
import {useState, useCallback} from 'react';


function HamNavBar(){
    const [isOpen, setOpen] = useState(false);
    const toggle = useCallback(() => setOpen(!isOpen), [isOpen, setOpen]);
    return (
        <div className="flex flex-col justify-center items-center">
            <Hamburger toggled={isOpen} toggle={toggle} />
            {isOpen && <div className="flex flex-col justify-center items-center">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </div>}
        </div>
    );
}

export default HamNavBar

