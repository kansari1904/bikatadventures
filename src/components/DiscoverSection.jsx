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
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-10 py-8">

            {/* Heading */}
            <h1 className="text-center text-xl sm:text-2xl md:text-3xl font-semibold mb-6 md:mb-8">
                Discover Your Next Adventure
            </h1>

            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">

                {data.map((item, index) => (
                    <div key={index} className="w-full">

                        {/* Image */}
                        <img
                            src={item.img}
                            alt={item.month}
                            className="w-full aspect-[16/9] object-cover rounded-xl"
                        />

                        {/* Text */}
                        <p className="mt-2 text-sm sm:text-base font-medium">
                            {item.month}
                        </p>

                    </div>
                ))}

            </div>
        </div>
    );
};

export default DiscoverSection;