import React from "react";

const categories = [
    {
        label: "Skiing Courses",
        img: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=200&h=200&fit=crop",
    },
    {
        label: "Kayaking Courses",
        img: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=200&h=200&fit=crop",
    },
    {
        label: "6000M+ Peaks",
        img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=200&h=200&fit=crop",
    },
    {
        label: "Nepal Treks",
        img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=200&h=200&fit=crop",
    },
    {
        label: "Offbeat Treks",
        img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=200&fit=crop",
    },
    {
        label: "Scuba Courses",
        img: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=200&h=200&fit=crop",
    },
    {
        label: "Wild Life Treks",
        img: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=200&h=200&fit=crop",
    },
    {
        label: "Winter Treks",
        img: "https://images.unsplash.com/photo-1551524559-8af4e6624178?w=200&h=200&fit=crop",
    },
];

const CategoryItem = ({ cat }) => (
    <div className="flex flex-col items-center gap-2 cursor-pointer group shrink-0">
        <div className="w-24 h-24 sm:w-[100px] sm:h-[100px] rounded-full overflow-hidden border-2 border-gray-200
            group-hover:border-blue-400 group-hover:scale-105 transition-all duration-200">
            <img
                src={cat.img}
                alt={cat.label}
                className="w-full h-full object-cover"
            />
        </div>
        <span className="text-xs sm:text-sm font-medium text-center text-gray-700 max-w-[90px]">
            {cat.label}
        </span>
    </div>
);

const PopularSection = () => {
    return (
        <div className="w-full max-w-8xl mx-auto px-4 md:px-6 lg:px-10 py-8">

            <div className="flex flex-col md:flex-row md:items-center gap-6">

                {/* LEFT TEXT → 30% */}
                <div className="w-full md:w-[30%] text-center md:text-left">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 text-center">
                        Popular Categories
                    </h2>
                    <p className="text-sm sm:text-base md:text-[17px] text-[#212529] leading-relaxed text-center">
                        Browse through these categories to find the best adventure for yourself.
                        We organise Trekking, Cycling, Skiing & Mountaineering Expeditions.
                        We offer adventure activities in Uttrakhand, Himachal,  J & K, Ladakh, Sikkim, Karnataka, Maharashtra & Nepal
                    </p>
                </div>

                {/* RIGHT → auto fill remaining space */}
                <div className="hidden md:flex flex-1 gap-4 overflow-x-auto pb-2">
                    {categories.map((cat, i) => (
                        <CategoryItem key={i} cat={cat} />
                    ))}
                </div>

                {/* MOBILE GRID */}
                <div className="grid grid-cols-2 gap-6 md:hidden w-full">
                    {categories.map((cat, i) => (
                        <div key={i} className="flex flex-col items-center gap-2 cursor-pointer group">
                            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-gray-200
                                group-hover:border-blue-400 group-hover:scale-105 transition-all duration-200">
                                <img
                                    src={cat.img}
                                    alt={cat.label}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <span className="text-sm font-medium text-center text-gray-700">
                                {cat.label}
                            </span>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default PopularSection;