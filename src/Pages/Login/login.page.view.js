import React from 'react'
import {LoginInputBox,LoginSubmitButton} from '../../Components/FormInputBox'
import {PacmanLoader} from "react-spinners";

const LoginPageView = ({loading,fail,login,setLogin,handleFormSubmit}) => {

    return (
        <div class="flex">
            <div class="w-1/3"/>
        <div class="flex-row h-screen p-16 ml-12">
            <p class="text-6xl font-thin leading-loose">Login</p>
            <div class="w-1/4">
                <form onSubmit={e => {e.preventDefault();handleFormSubmit()}}>
                    {Object.keys(login).map(key => {
                        return (
                            <div>
                                <p>{key}</p>
                        <LoginInputBox input={login} setInput={setLogin} type={key === 'password' ? 'password' : 'text'} item={key} />
                        </div>)
                    })}
                    <LoginSubmitButton title='login' />
                </form>
            </div>
            <div class="pt-6">
            {loading ? <PacmanLoader 
                size={20}
                loading={loading} />
                : fail}
            </div>
        </div>
        </div>
    )
}

export default LoginPageView;