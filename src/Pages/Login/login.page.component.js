import React, {useEffect,useState} from 'react';
import LoginPageView from './login.page.view'
import {AuthContext} from '../../Common'
import {request} from '../../Common'

const LoginPage = (props) => {
    const {history} = props;
    const [login,setLogin] = useState({'userName':'','password':''});
    const {contextFunctions} = React.useContext(AuthContext);
    const [fail,setFail] = useState(null)
    const [loading,setLoading] = useState(false)

    const handleFormSubmit = async () => {
        try {
            setLoading(true)
            console.log(login.userName)
            const user = await request('login',[login.userName,login.password])
            console.log('here is the user',user)
            if (user.status === 200) {
                localStorage.setItem('session',JSON.stringify(user.output))
                contextFunctions.signIn(user.output)
                if (user.output.role === 'admin') {
                    history.push('/admin/articles')
                }
            } else {
                setFail( 
                <p class="text-2xl font-thin text-red-500">Login failed. Plesae try again.</p>
                )
            }
            setLoading(false)
        } catch {
            setLoading(false)
            setFail( 
                <p class="text-2xl font-thin text-red-500">Server failure.</p>
                )
        }
    }

    return(
        <LoginPageView loading={loading} login={login} fail={fail} setLogin={setLogin} handleFormSubmit={handleFormSubmit} />
    )
}

export {LoginPage};