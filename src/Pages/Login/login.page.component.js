import React, {useEffect,useState} from 'react';
import LoginPageView from './login.page.view'
import {AuthContext} from '../../Common'
import {request} from '../../Common'

const LoginPage = (props) => {
    const {history} = props;
    const [login,setLogin] = useState({'userName':'','password':''});
    const {contextFunctions} = React.useContext(AuthContext);

    const handleFormSubmit = async () => {
        try {
            const user = await request('login',[login.userName,login.password])
            if (user.status === 200) {
                localStorage.setItem('session',JSON.stringify(user.output))
                contextFunctions.signIn(user.output)
                if (user.output.role === 'admin') {
                    history.push('/admin/articles')
                }
            }
        } catch {

        }
    }

    return(
        <LoginPageView login={login} setLogin={setLogin} handleFormSubmit={handleFormSubmit} />
    )
}

export {LoginPage};