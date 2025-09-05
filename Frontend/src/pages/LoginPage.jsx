import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const [isLoginMode, setIsLoginMode] = useState(true);
    const navigate = useNavigate();
    return (
        <div className="h-screen w-screen relative overflow-hidden">

            {/* background video */}
            <video
                autoPlay
                loop
                muted
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="https://static.vecteezy.com/system/resources/previews/002/279/952/mp4/breaking-news-background-free-video.mp4" type="video/mp4" />
            </video>

            {/* dark overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/*  Back to Home button */}
            <button
                onClick={() => navigate("/")}
                className="absolute top-4 left-4 bg-gray-700/70 hover:bg-gray-800 text-white px-4 py-2 rounded-full text-sm z-20"
            >
                ⬅ Back to Home 
            </button>

            {/* Centered container */}
            <div className="grid w-[100%] h-screen place-items-center relative z-10" >
                <div className="w-[430px] bg-white/50 p-8 rounded-2xl shadow-lg">
                    <div className="flex justify-center mb-4">
                        <h2 className="text-3xl font-semibold text-center">{isLoginMode ? "Login" : "Sign Up"}</h2>
                    </div>
                    <div className="relative flex h-12 mb-6 border border-gray-500 rounded-full overflow-hidden">
                        <button onClick={() => setIsLoginMode(true)} className={`w-1/2 text-lg font-medium transition-all z-10 ${isLoginMode ? "text-white" : "text-black"}`}>
                            Login
                        </button>
                        <button onClick={() => setIsLoginMode(false)} className={`w-1/2 text-lg font-medium transition-all z-10 ${!isLoginMode ? "text-white" : "text-black"}`}>
                            Sign Up
                        </button>
                        <div className={`absolute top-0 h-full w-1/2 rounded-full bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-200 ${isLoginMode ? "left-0" : "left-1/2"}`}></div>
                    </div>

                    {/*form section */}
                    <form className="space-y-4">
                        {!isLoginMode && (
                            <input type="text" placeholder="Name" required className="w-full p-3 border-b-2 border-gray-700 outline-none focus:border-cyan-500 placeholder-gray-700" />
                        )}
                        <input type="email" placeholder="Email" className="w-full p-3 border-b-2 border-gray-700 outline-none focus:border-cyan-500 placeholder-gray-700" />
                        <input type="password" placeholder="Password" required className="w-full p-3 border-b-2 border-gray-700 outline-none focus:border-cyan-500 placeholder-gray-700" />

                        {/*Sign Up Field*/}
                        {!isLoginMode && (
                            <input type="password" placeholder="Confirm Password" required className="w-full p-3 border-b-2 border-gray-700 outline-none focus:border-cyan-500 placeholder-gray-700" />
                        )}

                        {/*forget password for login */}
                        {isLoginMode && (
                            <div className="text-right">
                                <p className="text-cyan-600 hover:underline">Forget password</p>
                            </div>
                        )}

                        <button className="w-full p-3 bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-200 text-white rounded-full text-lg font-medium hover:opacity-90">
                            {isLoginMode ? "Login" : "SignUp"}
                        </button>

                        {/*switch link */}
                        <p className="text-center text-gray-600">{isLoginMode ? "Don't have an account " : "Already have an account? "}
                            <a href="#" onClick={(e) => setIsLoginMode(!isLoginMode)} className="text-cyan-600">
                                {isLoginMode ? "Signup now" : "Login"}
                            </a>
                        </p>


                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;