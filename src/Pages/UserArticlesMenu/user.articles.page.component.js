import React, {useEffect,useState} from 'react';
import UserArticlesPageView from './user.articles.page.view'
import {request} from '../../Common'

const UserArticlesMenu = (props) => {
    const [articles,setArticles] = useState([]);
    const [loading,setLoading] = useState(false)
    const [fail,setFail] = useState(null)

    const getArticles = async () => {
        const timer = setTimeout(() => setLoading(true), 300);
        const info = await request('database/getAllArticles',[])
        if (info.status === 200) {
            setArticles(info.output)
            setFail(null)
        } else (
            setFail(
                <p class="text-2xl font-thin text-red-500">
                    No articles received from server</p>
            )
        )
        setLoading(false)
        clearTimeout(timer)
    }

    useEffect(() => {
        getArticles();
    },[])

    return(
        <UserArticlesPageView fail={fail} loading={loading} articles={articles} setArticles={setArticles} />
    )
}

export {UserArticlesMenu};