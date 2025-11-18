import { useContext } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";
import axios from "axios";
 const links = ["Business","Entertainment","General","Health","Science","Sports","Technology"];
function Navbar({setArticles}){
    const {theme ,setTheme} = useContext(ThemeContext)

    const handleSearch =  async(e) =>{
        const search = e.target.value;
        try {
            const res = await axios.get(`https://newsapi.org/v2/top-headlines?q=${search}&apiKey=${import.meta.env.VITE_API_KEY}`)
            setArticles(res.data.articles)
        } catch (error) {
            console.log('error')
        }
    }

    const ToggleTheme = ()=>{
        if(theme==="light"){
            setTheme("dark")
            localStorage.setItem('theme','dark')
        } else{
            setTheme("light")
            localStorage.setItem('theme','light')
        }
    }
   
    return(
        <div className="fixed w-full bg-white dark:bg-blue-900 z-10 shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                {/* {Logo} */}
               <Link to={'/'}>
                <div className="md:text-2xl text-lg font-bold text-blue-600 dark:text-gray-200 cursor-pointer">
                    NewsApp
                </div>
               </Link>
                {/* {Desktop Links} */}
                <div className="hidden md:flex space-x-6">
                    {links.map((link)=>{
                        return <Link to={`/${link.toLowerCase()}`} key={link} className="text-gray-700 dark:text-gray-200 hover:dark:text-white hover:text-blue-400 transition ">
                            {link}
                        </Link>
                    })}
                </div>
                <div className="flex items-center justify-center gap-4">
                    <div className="relative bg-gray-200 p-2 rounded-lg">
                        <search className="absolute left-3 top-1/2 transform translate-y-0.5 text-muted-foreground h-4 w-4"/>
                        <input onChange={handleSearch} type="text" placeholder="Search News...." className="md:pl-10 pl-7 w-30 md:w-64 outline-none focus:outline-none"/>
                    </div>
                    <button onClick={ToggleTheme} className="bg-gray-200 dark:bg-blue-500 dark:text-gray-200 px-3 py-2 rounded-lg cursor-pointer">
                        {
                            theme==="light" ?  <FaMoon/> :  <FaSun/>
                        }
                       
                    </button>
                    {/* {Mobile Menu Button} */}
                    <button className="md:hidden ">
                        <menu size={25}/>
                    </button>

                </div>
            </div>

        </div>
    )
}
export default Navbar;