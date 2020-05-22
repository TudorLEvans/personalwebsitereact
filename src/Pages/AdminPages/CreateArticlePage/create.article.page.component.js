import React, {useState} from 'react';
import CreateArticlePageView from './create.article.page.view'
import {request} from '../../../Common'

const CreateArticlePage = (props) => {
    const [article,setArticle] = useState({});
    const {history } = props;
    console.log(article)

    const handleFormSubmit = async () => {
        try {
            const info = await request('database/createArticle',[article.title,article.subtitle,article.body])
            console.log(info)
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