import { useState } from "react";

function NewsCard({ title, content }) {
    const [showFull, setShowFull] = useState(false);
    const [showSummary, setShowSummary] = useState(false);
    const summary = content.split(" ").slice(0, 15).join(" ") + "...";
    return (
        <div className="bg-white text-black shadow-lg rounded-lg p-4 flex flex-col aspect-[4/3] w-full ">
            <h2 className="text-lg font-semibold mb-2">{title}</h2>
            <p className="text-gray-700">
                {showFull ? content : showSummary ? summary : content.slice(0, 100) + "..."}
            </p>
            <div className="flex gap-3 mt-auto">
                <button
                    className="bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-500"
                    onClick={() => setShowFull(!showFull)}
                >
                    {showFull ? "Show Less" : "Read More"}
                </button>
                <button
                    className="bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-500"
                    onClick={() => setShowSummary(!showSummary)}
                >
                    {showSummary ? "Hide Summary" : "Summary"}
                </button>
            </div>
        </div>

    )
}
export default NewsCard;