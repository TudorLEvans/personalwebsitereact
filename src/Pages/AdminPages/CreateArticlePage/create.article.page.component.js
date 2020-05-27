import React, {useState} from 'react';
import CreateArticlePageView from './create.article.page.view'
import {request} from '../../../Common'

const CreateArticlePage = (props) => {
    const [article,setArticle] = useState({});
    const {history } = props;
    console.log(article)

    const handleFormSubmit = async () => {
        try {
            console.log(article.body)
            const body = JSON.stringify(article.body.split('\n'))
            const info = await request('database/createArticle',[article.title,article.subtitle,body])
            if (info.output === true) {
                history.push('/admin/articles')
            }
        } catch {
            
        }
    }
    return(
        <CreateArticlePageView article={article} setArticle={setArticle} handleFormSubmit={handleFormSubmit} />
    )
}

export {CreateArticlePage};