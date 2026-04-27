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
        <div className="w-full max-w-8xl mx-auto px-4 md:px-6 lg:px-10 py-8">

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
                Discover Your Next
                <br className="block md:hidden" />
                <span className="block md:inline text-center">
                   { " "} Adventure
                </span>
            </h2>

            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-10">

                {data.map((item, index) => (
                    <div key={index} className="w-full">

                        {/* Image */}
                        <img
                            src={item.img}
                            alt={item.month}
                            className="w-full h-32 sm:h-40 md:h-44 lg:h-48 object-cover rounded-[25px]"
                        />

                        {/* Text */}
                        <p className="mt-1 mb-2 text-lg sm:text-xl md:text-2xl font-semibold text-black">
                            {item.month}
                        </p>

                    </div>
                ))}

            </div>
        </div>
    );
};

export default DiscoverSection;