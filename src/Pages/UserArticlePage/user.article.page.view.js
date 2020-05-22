import React from 'react'
import {PacmanLoader} from "react-spinners";

const UserArticlePageView = ({loading,fail,article}) => {
    let articleText;
    const articleDate = new Date(Date.parse(article.timeCreated))

    if (article.body) {
        articleText = article.body.split('\n').map(item => {return <p class="break-words whitespace-prewrap">{item}</p>})
        console.log(articleText)
    }

    return (
        <div class="flex">
            <div class="font-mono fixed w-1/10 pl-10 m-8 border-r-2 text-xs border-solid border-black text-right pr-4 mr-16 mt-64">
                <div class="w-48">
                <p class="w-full break-words whitespace-prewrap">title: {article.title}</p>
                </div>
                <div class="w-48">
                <p class="w-full break-words whitespace-prewrap">subtitle: {article.subtitle}</p>
                </div>
                <div class="w-48">
                <p class="w-ful break-words whitespace-prewrap">date: {articleDate.toDateString()}</p>
                </div>
            </div>
            <div class="w-1/6"/>
            <div class="flex-column items-center p-16 z-10 mb-32 w-1/2">
                <div class="w-fill min-h-32">
                    {loading ? 
                    <div class="h-32">
                    <PacmanLoader 
                        size={50}
                        loading={loading} /> 
                    </div>
                        :
                    <div>
                    <p class="text-6xl font-thin break-words">{article.title}</p>
                    <p class="text-lg italic break-words font-thin whitespace-prewrap">{article.subtitle}</p>
                    </div>
                    }
                </div>
                <div class="border-solid border-black border-2 mt-4 mb-16" />
                {loading ?
                    <PacmanLoader 
                    size={50}
                    loading={loading} /> 
                    : 
                    <div>
                    { articleText ?
                        <div class="w-fill wrap bg-white text-lg font-hairline mb-4">{articleText}</div>
                        :
                        fail }
                    </div>
                }
            </div>
        </div>
    )
}

export default UserArticlePageView