import React, {useState,useEffect} from 'react';
import {request} from '../../Common'
import UserArticlePageView from './user.article.page.view';

const UserArticlePage = (props) => {
    const [article,setArticle] = useState({});
    const [loading,setLoading] = useState(false)
    const [fail,setFail] = useState(null)
    console.log(article)
    console.log(fail)
    console.log(loading)

    const getArticle = async (id) => {
        const timer = setTimeout(() => setLoading(true), 300);
        const info = await request('database/getArticleById',[id])
        setLoading(false)
        if (info.status === 200) {
            setArticle(info.output)
            setFail(null)
            setLoading(false)
        } else {
            setFail(
                <p 
                class="text-2xl font-thin text-red-500">
                    Failed to fetch article.</p>
            )
        }
        clearTimeout(timer)
    }

    useEffect(() => {
        getArticle(props.match.params.articleId)
    },[props.match.params.articleId])


    return(
        <UserArticlePageView fail={fail} loading={loading} article={article} />
    )
}

export {UserArticlePage};