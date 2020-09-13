import React from 'react'
import {PacmanLoader} from "react-spinners";

const UserArticlePageView = ({loading,fail,article}) => {
    let articleText;
    const articleDate = new Date(Date.parse(article.timeCreated))

    if (article.body) {
        articleText = article.body.map(item => 
        { 
            if (item.includes('*subheader*')) {
                return <p class="break-words text-xl lg:text-2xl font-bold whitespace-prewrap pb-6 leading-relaxed pt-2">{item.replace('*subheader*','')}</p>
            } else if (item.includes('*link*')) {
                const result = item.replace('*link*','')
                return <a href={result} class="break-words font-500 whitespace-prewrap pb-2 underline">{result}</a>
            } else if (item.includes('*quote*')) {
                const result = item.replace('*quote*','')
                return <p class="break-words text-xl tracking-wide whitespace-prewrap leading-loose font-semibold text-grey-800 py-12 px-4 italic">{result}</p>
            } else {
                return <p class="break-words text-gray-700 font-semibold whitespace-prewrap pb-2">{item}</p>
            }
        })
    }

    return (
        <div class="flex flex-row md:pt-32 pt-12 min-h-screen">
            <div class="md:w-1/3"/>
            <div class="flex-column items-center mb-6 md:w-1/2 w-full text-gray-800 px-6 md:px-0">
                <div class="md:w-3/4 w-full min-h-32 ">
                    {loading ? 
                        <div class="h-32">
                            <PacmanLoader 
                                size={50}
                                loading={loading} /> 
                        </div>
                        :
                        <div>
                            <p class="text-4xl lg:text-6xl font-bold break-words pb-4">{article.title}</p>
                            <p class="text-lg break-words font-bold whitespace-prewrap pb-6">By Tudor Evans on {articleDate.toDateString()}</p>
                            <p class="text:md lg:text-lg text-gray-700 pb-6 break-words font-semibold whitespace-prewrap">{article.subtitle}</p>
                        </div>
                    }
                </div>
                {loading ?
                    null
                    : 
                    <div>
                    { articleText ?
                        <>
                            <div class="md:w-3/4 w-full lg:wrap bg-white text-gray-700 text-lg lg:text-xl mb-2">{articleText}</div>
                        </>
                        : fail 
                    }
                    </div>
                }
            </div>
        </div>
    )
}

export default UserArticlePageView
