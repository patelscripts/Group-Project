import { Link } from "react-router-dom";
function Header() {
    return (
        <div className="fixed top-0 left-0 w-full h-16 flex justify-between items-center px-8 py-4 z-20 bg-black">
            <div className="flex items-center gap-2">
                {/*  news logo  */}
                <img src="https://media.istockphoto.com/id/929047972/vector/world-news-flat-vector-icon-news-symbol-logo-illustration-business-concept-simple-flat.jpg?s=612x612&w=0&k=20&c=5jpcJ7xejjFa2qKCzeOXKJGeUl7KZi9qoojZj1Kq_po="
                    alt="news-logo"
                    className="h-10 w-auto object-contain rounded-md" />
            </div>

            {/* {center me navbar honge} */}
            <nav className="flex gap-6 px-6 py-2 rounded-xl bg-black backdrop-blur-md shadow-lg">
                <a href="#" className="text-white px-3 py-1 rounded-lg hover:bg-black hover:text-white transition-all outline-1 outline-white">National</a>
                <a href="#" className="text-white px-3 py-1 rounded-lg hover:bg-black hover:text-white transition-all outline-1 outline-white">International</a>
                <a href="#" className="text-white px-3 py-1 rounded-lg hover:bg-black hover:text-white transition-all outline-1 outline-white">Entertainment</a>
                <a href="#" className="text-white px-3 py-1 rounded-lg hover:bg-black hover:text-white transition-all outline-1 outline-white">Sports</a>
                <a href="#" className="text-white px-3 py-1 rounded-lg hover:bg-black hover:text-white transition-all outline-1 outline-white">Education</a>

            </nav>

            {/* {right side me login and search ka otion hoga} */}
            <div className="flex items-center gap-4">
                <input type="text" placeholder="search..."
                className="px-3 py-1 rounded-lg bg-white/10 text-white hover:bg-black placeholder-white outline-1 outline-white focus:ring-2 focus:ring-black" />

                {/* {login button} */}
                <Link to="/login">
                <button className="bg-white/10 hover:bg-black px-3 py-1 rounded-lg text-white outline-1 outline-white">Login</button>
                </Link>
            </div>
        </div>

    )
}
export default Header;