import React from 'react'
import {ArticleCard} from '../../Components/ArticleCard'
import {PacmanLoader} from "react-spinners";

const UserArticlesPageView = ({fail,loading,articles,setArticles}) => {

    return (
        
        <div class="flex">
            <div class="w-1/6"/>
            <div class="w-1/2  p-16 z-10 mb-32 ">
            <p class="text-6xl font-thin leading-loose">Blog Posts</p>
            <div class="border-solid border-black border-2 mt-4 mb-16" />
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
            <div class="w-1/4"></div>
        </div>
    )
}

export default UserArticlesPageView;