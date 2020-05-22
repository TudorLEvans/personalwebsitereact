import React, {useState,useEffect} from 'react';
import {request} from '../../Common'
import UserArticlePageView from './user.article.page.view';

const UserArticlePage = (props) => {
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


    return(
        <UserArticlePageView article={article} />
    )
}

export {UserArticlePage};