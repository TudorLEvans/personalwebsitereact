import React from 'react';
import {NavbarButton,FunctionButton} from '../NavbarButton'
import {Link} from 'react-router-dom';
import {AuthContext} from '../../Common'
import sync from 'css-animation-sync';
import {GrLinkedin,GrGithub} from 'react-icons/gr'

const HeaderView = (props) => {
    // sync('gadient');

    return(
        <div 
            class="w-full flex-col h-auto shadow-xl"
            id="header_backing">
                <div class="flex flex-row  items-center h-14 w-full  px-4 py-3 pl-4 lg:pl-32 lg:pr-12">
            <Link class="md:mr-48 mr-32" to='/home' >
                <p class="text-white text-2xl font-500 hover:text-gray-400">Tudor</p>
            </Link>
            <Link class="mr-6" to='/articles' >
                <p class="text-white text-2xl font-500 hover:text-gray-400">Blog</p>
            </Link>
            <AuthContext.Consumer>
                {(context) => {
                    return context.state.token === null 
                    ?              
                    ( <>
                    <Link to='/login' >
                        <p class="text-white text-2xl font-500 hover:text-gray-400">Login</p>
                    </Link>
                    </> )
                    :   ( <>
                    <Link onClick={props.handleLogout} to='/home' >
                        <p class="text-white text-2xl font-500 hover:text-gray-400">Tudor</p>
                    </Link>
                    </> )
                }}
            </AuthContext.Consumer>
            <AuthContext.Consumer>
                {(context) => {
                    if  (context.state.role === 'admin') {
                        return context.state.role === 'admin'
                        ? (                 
                        <Link onClick={props.handleLogout} to='/home' >
                            <p class="text-white lg:text-6xl hover:text-gray-400">Tudor</p>
                        </Link>
                        ) : null
                    }
                }}
            </AuthContext.Consumer>
            </div>
            {props.location.pathname === '/home' ?
                <div class="flex flex-col items-center">
                    <div class="h-48"></div>
                    <div class="md:border border-white rounded-lg md:w-1/3 md:p-8">
                        <p class="text-5xl md:text-6xl text-white text-center font-thin">Tudor Lucien Evans</p>
                        <div class="flex justify-center">
                            <Link onClick={() => window.location.href = 'https://www.linkedin.com/in/tudor-evans-5a2232151/'}>
                                <GrLinkedin class="p-2" color='white' size={60} />
                            </Link>
                            <Link onClick={() => window.location.href = 'https://github.com/TudorLEvans'}>
                                <GrGithub class="p-2" color='white' size={60} />
                            </Link>
                        </div>
                    </div>
                    <div class="h-24"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#FFFFFF" fill-opacity="1" d="M0,192L120,197.3C240,203,480,213,720,197.3C960,181,1200,139,1320,117.3L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
                    </svg>
                </div>
                : null
            }

        </div>
    )
}

export {HeaderView};