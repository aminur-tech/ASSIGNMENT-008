import { Download, Star } from 'lucide-react';
import React from 'react';


const Card = ({ d }) => {
    const { image, title, downloads, ratingAvg } = d;

    return (
        <div>
            <div className="w-[220px] h-auto border border-gray-200 rounded-2xl p-4 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 mb-4">
                {/* Image Section */}
                <div className="w-full h-[120px] rounded-xl overflow-hidden mb-3 relative">
                    <img
                        src={image}
                        alt={title}
                        className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                    />
                </div>

                {/* Title */}
                <h3 className="text-sm font-semibold text-gray-800 text-center line-clamp-2 mb-2">
                    {title}
                </h3>

                {/* Stats */}
                <div className="flex justify-between items-center w-full mt-1 text-xs">
                    <div className="flex items-center gap-1 text-green-600 font-medium">
                        <Download size={16} />
                        {downloads}
                    </div>
                    <div className="flex items-center gap-1 text-yellow-500 font-medium">
                        <Star size={16} />
                        {ratingAvg}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Card;
