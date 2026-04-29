import React from "react";

const data = [
    { month: "March", img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1170&auto=format&fit=crop" },
    { month: "April", img: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=1170&auto=format&fit=crop" },
    { month: "May", img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1170&auto=format&fit=crop" },
    { month: "June", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1170&auto=format&fit=crop" },
    { month: "July", img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1170&auto=format&fit=crop" },
    { month: "August", img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1170&auto=format&fit=crop" },
];

const DiscoverSection = () => {
    return (
        <div className="w-full max-w-8xl mx-auto px-4 md:px-6 lg:px-3 py-17 md:py-10">

            {/* Heading */}
            <h2 className="font-[Poppins] text-2xl md:text-3xl lg:text-[32px] text-center leading-8 md:leading-9 lg:leading-[38.4px] font-semibold text-[#212529] mb-8.75 ">
                Discover Your Next
                <br className="block min-[420px]:hidden" />
                <span className="block min-[420px]:inline text-center">
                   { " "} Adventure
                </span>
            </h2>

            {/* Grid */}
            <div className="px-4 grid grid-cols-2 min-[577px]:grid-cols-3 gap-5">

                {data.map((item, index) => (
                    <div key={index} className="w-full">

                        {/* Image */}
                        <div className="w-full aspect-389/177">
                            <img
                                src={item.img}
                                alt={item.month}
                                className="w-full h-full object-cover rounded-xl"
                            />
                        </div>

                        {/* Text */}
                        <p className="font-[Poppins] mt-2 text-medium sm:text-lg md:text-xl font-medium text-black -mb-1">
                            {item.month}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DiscoverSection;