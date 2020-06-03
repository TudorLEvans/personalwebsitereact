import React from 'react'

const LoginInputBox = ({input,setInput,item,type}) => {
    return(
        <div>
            <input 
                type={type}
                class="text-black border-solid border-2 border-black rounded-full py-2 px-4 h-16 w-64 m-2 p-2" 
                value={input[item]} 
                placeholder={item}
                onChange={e => {setInput({...input,...{[item]:e.target.value}})}} />
        </div>
    )
}

const TitleInputBox = ({input,setInput,item}) => {
    return(
        <div>
            <textarea 
                class="w-full text-6xl font-thin" style={{resize:"none"}}
                type="text" 
                value={input[item]} 
                onChange={e => {setInput({...input,...{[item]:e.target.value}})}} />
        </div>
    )
}

const SubtitleInputBox = ({input,setInput,item}) => {
    return(
        <div>
        <textarea 
            type="text" 
            class="w-full text-lg italic font-thin"           
            style={{resize:"none"}}
            value={input[item]}
            onChange={e => {setInput({...input,...{[item]:e.target.value}})}} />
        </div>
    )
}

const TextInputBox = ({input,setInput,item}) => {
    return(
        <div>
        <textarea 
            type="text" 
            class="w-full text-lg font-hairline mb-4 h-screen"
            value={input[item]}
            onChange={e => {setInput({...input,...{[item]:e.target.value}})}} />
        </div>
    )
}

const SelectBox = ({input,setInput,item,options}) => {
    return(
        <div class="text-grey-900 border-solid border-2 border-black rounded-full py-2 px-4 h-16 w-64 m-2 p-2" >
        <select 
            class="w-full"
            value={input[item]}
            onChange={e => {setInput({...input,...{[item]:e.target.value}})}} >
            {options.map(key => {
                return <option value={key}>{key}</option>
            })}
        </select>
        </div>
    )
}

const LoginSubmitButton = ({title}) => {
    return(
        <div>
        <input 
            type="submit" 
            value={title}
            class="hover:text-white font-mono text-black border-solid border-2 border-black bg-white hover:bg-black p-2 lg:m-2" />
            </div>

    )
}

const MainSubmitButton = ({title}) => {
    return(
        <input 
            type="submit" 
            value={title}
            class="hover:bg-black hover:text-white text-black border-solid bg-white border-2 border-black rounded-full py-2 px-4 h-16 text-xl lg:m-2 p-2" />

    )
}

export {LoginInputBox,TextInputBox,SelectBox,LoginSubmitButton,TitleInputBox,MainSubmitButton,SubtitleInputBox};