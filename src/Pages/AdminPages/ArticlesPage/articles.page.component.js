import React, {useEffect,useState} from 'react';
import ArticlesPageView from './articles.page.view'
import {request} from '../../../Common'

const ArticlesPage = (props) => {
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
        <ArticlesPageView articles={articles} setArticles={setArticles} />
    )
}

export {ArticlesPage};