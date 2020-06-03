import React from 'react';
import {Link} from 'react-router-dom';

const NavbarButton = ({text,hyperlink}) => {
    return(
        <Link to={hyperlink}>
            <div class="transition-all duration-500 text-white hover:text-primary-colour border-solid border-2 border-white hover:bg-white rounded-full p-4 m-2">
                <p class="text-xl lg:text-2xl text-center">{text}</p>
            </div>
        </Link>
    )
}

const FunctionButton = ({text,handleClick}) => {
    return(
        <Link onClick={e => {e.preventDefault();handleClick()}}>
            <div class="transition-all duration-500 text-white hover:text-primary-colour border-solid border-2 border-white hover:bg-white rounded-full p-4 m-2">
                <p class="text-xl lg:text-2xl text-center">{text}</p>
            </div>
        </Link>
    )
}

const NormalButton = ({text,hyperlink}) => {
    return(
        <Link to={hyperlink}>
            <div class="text-black bg-white hover:text-white border-solid border-2 border-black hover:bg-black rounded-full py-2 px-4">
                <p class=" text-2xl text-center">{text}</p>
            </div>
        </Link>
    )
}

const CreateButton = ({text,hyperlink}) => {
    return(
        <Link to={hyperlink}>
            <div class="text-black content-center bg-white hover:text-white border-solid border-2 border-black hover:bg-black w-24">
                <p class=" text-6xl font-bold text-center">{text}</p>
            </div>
        </Link>
    )
}

const DeleteButton = ({handleDelete}) => {
    return(
        <Link>
            <div 
                class="text-black bg-white border-solid border-2 border-grey border-radius-2 hover:bg-grey-600 p-2"
                onClick={e => {handleDelete()}}>
                <p class=" text-xl text-center">Delete</p>
            </div>
        </Link>
    )
}

export {NavbarButton,NormalButton,DeleteButton,FunctionButton,CreateButton};