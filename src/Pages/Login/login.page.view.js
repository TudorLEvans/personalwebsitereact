import React from 'react'
import {LoginInputBox,MainSubmitButton} from '../../Components/FormInputBox'
import {PacmanLoader} from "react-spinners";

const LoginPageView = ({loading,fail,login,setLogin,handleFormSubmit}) => {

    return (
        <div class="flex">
        <div class="lg:w-1/3"/>
        <div class="flex flex-col items-center w-full lg:w-1/3 lg:p-6 lg:p-12 mx-6 lg:mx-0 mt-16 bg-gray-100 border-gray-200 border-solid border-2 rounded-lg shadow-lg">
            <p class="text-6xl font-thin leading-loose">Login</p>
            <div class="lg:w-1/3 w-full flex flex-col items-center">
                <form class="flex flex-col items-center" onSubmit={e => {e.preventDefault();handleFormSubmit()}}>
                    {Object.keys(login).map(key => {
                        return (
                            <div>
                        <LoginInputBox input={login} setInput={setLogin} type={key === 'password' ? 'password' : 'text'} item={key} />
                        </div>)
                    })}
                    <MainSubmitButton title='login' />
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