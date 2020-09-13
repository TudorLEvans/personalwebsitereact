import React from 'react';

const FooterView = () => {
    return(
        <div class=" w-full text-white mt-12" id="header_backing">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#FFFFFF" fill-opacity="1" d="M0,192L120,197.3C240,203,480,213,720,197.3C960,181,1200,139,1320,117.3L1440,96L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
            </svg>
            <p class="text-lg font-700 leading-normal text-left p-4">Copyright Tudor Evans, 2020</p>
        </div>
    )
}

export {FooterView};