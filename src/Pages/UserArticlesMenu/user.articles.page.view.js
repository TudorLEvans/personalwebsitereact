import React from 'react'
import {ArticleCard} from '../../Components/ArticleCard'
import {PacmanLoader} from "react-spinners";

const UserArticlesPageView = ({fail,loading,articles,setArticles}) => {

    return (
        
        <div class="flex">
            <div class="lg:w-1/6"/>
            <div class="w-full lg:w-1/2 p-6 lg:p-16 lg:mb-32 ">
            <p class="text-4xl lg:text-6xl font-thin leading-loose">Blog Posts</p>
            <div class="border-solid border-black border-2 mt-4 mb-6 lg:mb-16" />
                {loading ?
                <div class="justify-center">
                <PacmanLoader 
                size={50}
                loading={loading} />
                </div>
                : 
                    <div class="">
                {articles.length ? articles.map(item => {
                    return <ArticleCard type='user' articles={articles} setArticles={setArticles} article={item} />
                }) : fail
                }
                </div>
                } 
                </div>
            <div class="lg:w-1/4"></div>
        </div>
    )
}

export default UserArticlesPageView;