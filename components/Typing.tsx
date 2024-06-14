"use client"
import React, { useEffect, useRef } from "react";
import Typed from 'typed.js';


const Typing = () => {

    const typingRef = useRef(null);

    useEffect(() => {
        const options = {
            strings: [
                'Pooja Bangar',
                'Graphic Designer',
                'Freelancer'
            ],
            typeSpeed: 50,
            backSpeed: 50,
            backDelay: 3000,
            loop: true,
            showCursor: true,
        };

        const typingInstance = new Typed(typingRef.current, options);

        return () => {
            typingInstance.destroy();
        };
    }, []);


    return (
       
            <div className="flex items-center justify-center">
                <div className='mt-40'>
                    <div className="text-2xl sm:text-5xl lg:text-6xl tracking-wide flex flex-col sm:flex-row justify-center p-5 sm:p-10 mt-5 mb-5 text-[#3B82F6]">
                        <div className="typing mb-5 sm:mb-0 sm:mr-5 flex justify-center items-center">
                            <span className="text-black mr-2 lg:mr-5">I am</span>
                            <span ref={typingRef} />
                        </div>
                    </div>
                </div>
            </div>

      
    )
}

export default Typing;