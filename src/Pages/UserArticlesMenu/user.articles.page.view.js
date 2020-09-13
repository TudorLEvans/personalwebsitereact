import React from 'react'
import {ArticleCard} from '../../Components/ArticleCard'
import {PacmanLoader} from "react-spinners";

const UserArticlesPageView = ({fail,loading,articles,setArticles}) => {

    return (
        
        <div class="flex md:flex-row flex-col w-full min-h-screen">
            <div class="flex flex-col pt-32 font-bold text-5xl md:w-1/3 px-6 md:px-0">
                <p class="leading-loose md:pl-32">Blog Posts</p>
                <p class="text-lg font-semibold md:w-5/6 text-gray-700 md:pl-32">Here I like to share a few thoughts, book reviews, ideas, research - anything which catches my fancy!</p>
            </div>
            <div class="pt-32 lg:mb-32 md:w-3/4 px-6 md:px-0">
                {loading ?
                    <div class="justify-center">
                        <PacmanLoader 
                        size={50}
                        loading={loading} />
                        </div>
                        : 
                    <div class="w-full">
                        {articles.length ? articles.map(item => {
                            return <ArticleCard type='user' articles={articles} setArticles={setArticles} article={item} />
                        }) : fail }
                    </div>
                } 
            </div>
        </div>
    )
}

export default UserArticlesPageView;