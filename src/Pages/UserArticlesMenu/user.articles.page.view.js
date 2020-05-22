import React from 'react'
import {ArticleCard} from '../../Components/ArticleCard'
import {NormalButton} from '../../Components/NavbarButton'

const UserArticlesPageView = ({articles,setArticles}) => {

    return (
        
        <div class="flex">
            <div class="w-1/6"/>
            <div class="w-1/2  p-16 z-10 mb-32 ">
            <p class="text-6xl font-thin leading-loose">Blog Posts</p>
            <div class="border-solid border-black border-2 mt-4 mb-16" />
                <div class="">
                {articles.length ? articles.map(item => {
                    return <ArticleCard type='user' articles={articles} setArticles={setArticles} article={item} />
                }) : null
                }
                </div>
            </div>
            <div class="w-1/4"></div>
        </div>
    )
}

export default UserArticlesPageView;