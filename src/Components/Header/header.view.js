import React from 'react';
import {NavbarButton,FunctionButton} from '../NavbarButton'
import {Link} from 'react-router-dom';
import {AuthContext} from '../../Common'

const HeaderView = (props) => {
    return(
        <div class="w-full flex h-32 items-center px-4 py-3 justify-between pl-32 pr-12 bg-primary-colour shadow-xl">
            <Link to='/home' >
                <p class="text-white text-6xl">TLE</p>
            </Link>
            <div class="flex">
                <AuthContext.Consumer>
                    {(context) => {
                        return context.state.token === null 
                        ?  <NavbarButton text='login' hyperlink='/login' />
                        :  <FunctionButton text='logout' handleClick={props.handleLogout} />
                    }}
                </AuthContext.Consumer>
                <AuthContext.Consumer>
                    {(context) => {
                        if  (context.state.role === 'admin') {
                            return <NavbarButton text='edit articles' hyperlink='/admin/articles' />
                        }
                    }}
                </AuthContext.Consumer>
                <NavbarButton text='blog' hyperlink='/articles' />
            </div>
        </div>
    )
}

export {HeaderView};