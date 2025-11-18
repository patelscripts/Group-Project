import { useEffect } from "react"
import axios from "axios"
import NewsCard from "../components/NewsCard"

function News({country,articles,setArticles,category}){
    const fetchAllNews = async() =>{
        try {
            const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`)
            setArticles(res.data.articles);
            console.log(res.data.articles);
        } catch (error) {
            console.log("error")
        }
    }
    useEffect(()=>{
        fetchAllNews()
    },[category])
    return(
        <div className="py-24 md:px-0 bg-gray-200 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-7">
                {articles.map((article,index)=>{
                   return <NewsCard key={index} article={article}/>
                })
            }
            </div>
        </div>
    )
}
export default News;