import React from 'react'
import {ArticleForm} from '../../../Components/ArticleForm'

const UpdateArticlePageView = ({article,setArticle,handleFormSubmit}) => {

    return (
        <div class="flex-column">
            <div class="flex-row justify-center content-center h-screen items-center">
                <ArticleForm handleFormSubmit={handleFormSubmit} article={article} setArticle={setArticle} />
            </div>
        </div>
    )
}

export default UpdateArticlePageView