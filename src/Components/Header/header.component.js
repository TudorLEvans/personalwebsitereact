import React from 'react';
import {HeaderView} from './header.view'
import {AuthContext} from '../../Common'

const HeaderComponent = (props) => {
    const {history} = props;
    const {contextFunctions} = React.useContext(AuthContext);
    const handleLogout = () => {
        localStorage.removeItem('session')
        contextFunctions.signOut();
        history.push('/home')
    }

    return(
        <HeaderView handleLogout={handleLogout} />
    )
}

export {HeaderComponent};