import React from 'react'
import {Link} from 'react-router-dom';
import {DeleteButton} from '../NavbarButton'
import {request} from '../../Common'

const ArticleCard = ({article,articles,setArticles,type}) => {
    const articleId = article.articleId
    const pathname = type === 'admin' ? '/admin/articles/update' : `/article/${articleId}`
    const handleDelete = async () => {
        try {
            const info = await request('database/deleteArticle',[articleId])
            if (info.status === 200) {
                setArticles(articles.filter(item => item.articleId !== articleId ))
            }
        } catch {
            
        }
    }
    const articleDate = new Date(Date.parse(article.timeCreated))
    return (
        <Link to={{
            pathname: pathname,
            state: {
                articleId:articleId
            }
         }} class="w-full">
            <div class="md:w-3/4 text-gray-700 justify-between border-solid border-b-2 border-gray-700 bg-white py-2 pb-16 mb-12">
                <div class="flex flex-col">
                    <p class="text-xl lg:text-5xl truncate font-bold leading-loose hover:text-gray-900 pb-4">{article.title}</p>
                    <div class="flex flex-row items-center">
                        <div class="rounded-full px-4 py-2 text-white" id="header_backing" >
                            <p class="text-s font-semibold" >{articleDate.toDateString()}</p>
                        </div>
                    </div>
                </div>
                { type === 'admin' ? <div class=""><DeleteButton handleDelete={handleDelete} /></div> : null }
            </div>
        </Link>
    )
}

export {ArticleCard};