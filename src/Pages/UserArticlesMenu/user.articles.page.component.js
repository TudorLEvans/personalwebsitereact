import React, {useEffect,useState} from 'react';
import UserArticlesPageView from './user.articles.page.view'
import {request} from '../../Common'

const UserArticlesMenu = (props) => {
    const [articles,setArticles] = useState([]);

    const getArticles = async () => {
        const info = await request('database/getAllArticles',[])
        if (info.status === 200) {
            setArticles(info.output)
        } 
    }

    useEffect(() => {
        getArticles();
    },[])

    return(
        <UserArticlesPageView articles={articles} setArticles={setArticles} />
    )
}

export {UserArticlesMenu};