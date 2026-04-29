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
        <div className="w-24 h-24 sm:w-25 sm:h-25 rounded-full overflow-hidden border-none">
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
                <div className="w-full md:w-[40%] text-center lg:text-left">
                    <h2 className="font-[Poppins] text-[#212529] text-2xl md:text-3xl font-semibold mb-3 text-center">
                        Popular Categories
                    </h2>
                    <p className="font-[poppins] text-base leading-6 font-normal text-[#212529] text-center max-w-[230px] min-[400px]:max-w-[450px] md:max-w-[600px] mx-auto">
                        Browse through these categories to find the best adventure for yourself.
                        We organise Trekking, Cycling, Skiing & Mountaineering Expeditions.
                        We offer adventure activities in Uttrakhand, Himachal, J & K, Ladakh, Sikkim, Karnataka, Maharashtra, Nepal
                    </p>
                </div>
                   
                {/* laptop view */}
                <div className="hidden lg:flex w-full gap-4 px-2 py-6">
                    {categories.map((cat, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-3 min-w-0">

                            <div className="w-full max-w-[70px] lg:max-w-[50px] xl:max-w-[90px] aspect-square rounded-full overflow-hidden">
                                <img
                                    src={cat.img}
                                    alt={cat.label}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <span className="font-[poppins] text-sm lg:text-base xl:text-lg text-center text-[#212529]">
                                {cat.label}
                            </span>
                        </div>
                    ))}
                </div>

                {/* MOBILE GRID */}
                <div className="grid grid-cols-4 gap-5 lg:hidden w-full  px-2 py-9">
                    {categories.map((cat, i) => (
                        <div key={i} className="flex flex-col items-center gap-3 cursor-pointer group">
                            <div className="aspect-square rounded-full overflow-hidden border-none ">
                                <img
                                    src={cat.img}
                                    alt={cat.label}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <span className="font-[poppins] text-sm text-center text-[#212529]">
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