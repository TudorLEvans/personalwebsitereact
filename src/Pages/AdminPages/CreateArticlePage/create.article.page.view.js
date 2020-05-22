import React from 'react'
import {ArticleForm} from '../../../Components/ArticleForm'

const CreateArticlePageView = ({article,setArticle,handleFormSubmit}) => {

    return (
        <div class="h-screen">
            <ArticleForm handleFormSubmit={handleFormSubmit} article={article} setArticle={setArticle} />
        </div>
    )
}

export default CreateArticlePageView