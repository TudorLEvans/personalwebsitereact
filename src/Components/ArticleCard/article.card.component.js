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
         }}>
            <div class="flex w-full text-black justify-between border-solid border-t-2 border-b-2 border-grey bg-white py-2 px-4 mt-6 mb-6 hover:shadow-xl">
                <div class="flex-row w-10/12">
                    <p class="text-3xl truncate">{article.title}</p>
                    <p class="text-xs truncate">{article.subtitle}</p>
                    <p class="text-s font-semibold">{articleDate.toDateString()}</p>
                </div>
                { type === 'admin' ? <div class=""><DeleteButton handleDelete={handleDelete} /></div> : null }
            </div>
        </Link>
    )
}

export {ArticleCard};