import React from 'react'
import {ArticleCard} from '../../../Components/ArticleCard'
import {CreateButton} from '../../../Components/NavbarButton'

const ArticlesPageView = ({articles,setArticles}) => {

    return (
        <div class="flex items-centerw-fill">
            <div class="w-1/6"/>
            <div class="w-1/2 flex-column p-16 z-10 mb-32 ">
            <div class="flex">
                <div class="pt-4 pr-4 content-center items-center justify-center">
                    <CreateButton hyperlink='/admin/articles/create' text=' +' />
                </div>
                <p class="text-6xl font-thin leading-loose">Edit articles</p>
            </div>
            <div class="border-solid border-black border-2 mt-4 mb-16" />
            <div class="w-full">
                {articles.length ? articles.map(item => {
                    return <ArticleCard type='admin' articles={articles} setArticles={setArticles} article={item} />
                }) : null
                }
            </div>
            </div>
        </div>
    )
}

export default ArticlesPageView;