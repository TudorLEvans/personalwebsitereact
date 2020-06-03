import React from 'react'
import {PacmanLoader} from "react-spinners";

const UserArticlePageView = ({loading,fail,article}) => {
    let articleText;
    const articleDate = new Date(Date.parse(article.timeCreated))

    if (article.body) {
        articleText = article.body.map(item => 
        { 
            if (item.includes('*subheader*')) {
                return <p class="break-words text-xl lg:text-2xl font-thin underline whitespace-prewrap pb-6 leading-relaxed pt-2">{item.replace('*subheader*','')}</p>
            } else if (item.includes('*link*')) {
                const result = item.replace('*link*','')
                return <a href={result} class="break-words font-mono whitespace-prewrap pb-2 underline">{result}</a>
            } else {
                return <p class="break-words whitespace-prewrap pb-2">{item}</p>
            }
        })
        console.log(articleText)
    }

    return (
        <div class="flex">
            <div class="invisible lg:visible font-mono fixed w-1/10 pl-10 m-8 border-r-2 text-xs border-solid border-black text-right pr-4 mr-16 mt-64">
                <div class="w-48">
                <p class="w-full break-words whitespace-prewrap">title: {article.title}</p>
                </div>
                <div class="w-48">
                <p class="w-full break-words whitespace-prewrap">subtitle: {article.subtitle}</p>
                </div>
                <div class="w-48">
                <p class="w-full break-words whitespace-prewrap">date: {articleDate.toDateString()}</p>
                </div>
            </div>
            <div class="lg:w-1/6"/>
            <div class="flex-column items-center p-6 lg:p-16 mb-6 w-full lg:w-1/2">
                <div class="w-full min-h-32">
                    {loading ? 
                    <div class="h-32">
                    <PacmanLoader 
                        size={50}
                        loading={loading} /> 
                    </div>
                        :
                    <div>
                    <p class="text-4xl lg:text-6xl font-thin font-serif break-words">{article.title}</p>
                    <p class="text-lg italic break-words font-thin whitespace-prewrap">{article.subtitle}</p>
                    </div>
                    }
                </div>
                <div class="border-solid border-black border-2 mt-4 mb-8" />
                {loading ?
                    <PacmanLoader 
                    size={50}
                    loading={loading} /> 
                    : 
                    <div>
                    { articleText ?
                        <div class="w-full lg:wrap bg-white text-lg lg:text-xl font-serif font-hairline mb-2">{articleText}</div>
                        :
                        fail }
                    </div>
                }
            </div>
        </div>
    )
}

export default UserArticlePageView
