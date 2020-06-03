import React from 'react'
import {TextInputBox,MainSubmitButton,TitleInputBox,SubtitleInputBox} from '../FormInputBox'

const ArticleForm = ({handleFormSubmit,article,setArticle}) => {
    return (
        <div class="flex w-full">
            <div class="lg:w-1/6"/>
            <div class="w-full lg:w-1/2 px-6 lg:px-0 pt-16 pb-4">
            <form 
                onSubmit={e => {e.preventDefault();handleFormSubmit()}}>
                <div class="flex-column" >
                    <div>Title: </div>
                        <TitleInputBox input={article} setInput={setArticle} item='title' />
                    <div>Subtitle: </div>
                        <SubtitleInputBox input={article} setInput={setArticle} item='subtitle' />
                        <div class="border-solid border-black border-2 mt-4 mb-16" />
                    <div>Body: </div>
                        <TextInputBox input={article} setInput={setArticle} item='body' />
                    <MainSubmitButton title='submit' />
                </div>
            </form>
            </div>
        </div>
    )
}

export {ArticleForm};