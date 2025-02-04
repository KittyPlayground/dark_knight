import React from "react";

const comics = [
    { title: "Batman", issue: "#23", year: "1997", img: "../../assets/b6.jpg" },
    { title: "Batman Beyond", issue: "#9", year: "2000", img: "../../assets/b1.webp" },
    { title: "Batman Returns", issue: "#1", year: "2012", img: "../../assets/b2.jpg" },
    { title: "The Dark Knight", issue: "#9", year: "2020", img: "../../assets/b4.webp" },
    { title: "The Dark Knight Returns", issue: "#8", year: "2024", img: "../../assets/b7.webp" },
    { title: "The Dark Prince", issue: "#6", year: "2025", img: "../../assets/b3.jpg" },
];

const ComicCalendar: React.FC = () => {
    return (
        <section className="w-full bg-black text-white py-10">
            <div className="max-w-6xl mx-auto px-5">
                {/* Featured Comic Section */}
                <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="md:w-1/2">
                        <p className="text-sm text-gray-400 font-mono">ON SALE 2/5</p>
                        <h2 className="text-3xl font-mono font-bold text-red-600">NEW COMICS THIS WEEK</h2>
                        <p className="text-gray-300 mt-2 font-mono">Check out the newest DC comics coming out this week!</p>
                        <button className="mt-4 px-6 py-2 border border-red-800 rounded-lg hover:bg-red-700 hover:text-black transition font-mono">
                            RELEASE CALENDAR
                        </button>
                    </div>
                    <div className="md:w-1/2">
                        <img src={comics[0].img} alt={comics[0].title} className="w-full rounded-lg shadow-lg" />
                    </div>
                </div>

                {/* Comics List */}
                <div className="mt-10 overflow-x-auto">
                    <div className="flex space-x-6 ">
                        {comics.map((comic, index) => (
                            <div key={index} className="w-40 flex-shrink-0">
                                <img src={comic.img} alt={comic.title} className="w-full rounded-lg hover:scale-110 transition duration-500" />
                                <p className="mt-2 font-bold font-mono">{comic.title} {comic.issue}</p>
                                <p className="text-gray-400 font-mono">{comic.year}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ComicCalendar;
