import React, {useEffect,useState} from 'react';
import UpdateArticlePageView from './update.article.page.view'
import {request} from '../../../Common'

const UpdateArticlePage = (props) => {
    const [article,setArticle] = useState({});
    const {history } = props;

    const getArticle = async (id) => {
        const info = await request('database/getArticleById',[id])
        if (info.status === 200) {
            setArticle(info.output)
        }
    }

    useEffect(() => {
        getArticle(props.location.state.articleId)
    },[props.location.state.articleId])

    const handleFormSubmit = async () => {
        try {
            const info = await request('database/updateArticle',[article.title,article.subtitle,article.body,article.articleId])
            if (info.output === true) {
                history.push('/admin/articles')
            }
        } catch {

        }
    }

    return(
        <UpdateArticlePageView article={article} setArticle={setArticle} handleFormSubmit={handleFormSubmit} />
    )
}

export {UpdateArticlePage};