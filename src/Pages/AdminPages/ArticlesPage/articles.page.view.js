import React from 'react'
import {ArticleCard} from '../../../Components/ArticleCard'
import {CreateButton} from '../../../Components/NavbarButton'

const ArticlesPageView = ({articles,setArticles}) => {

    return (
        <div class="flex items-center w-full">
            <div class=""/>
            <div class=" flex-column p-6 lg:p-16">
                <div class="flex flex-row content-between">
                    <p class="text-4xl lg:text-6xl font-thin">Edit articles</p>
                    <div class="ml-4">
                        <CreateButton hyperlink='/admin/articles/create' text='Create' />
                    </div>
                </div>
                <div class="border-solid border-black border-2 mt-4 mb-8 lg:mb-16" />
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