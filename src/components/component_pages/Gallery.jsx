import React from "react";

//importing images
import final from "../../assets/images/nyscsecond.jpg";
import lamp from "../../assets/images/gallery/lamp.jpeg";
import outreach from "../../assets/images/gallery/outreach.jpeg";
import market from "../../assets/images/gallery/market.jpeg";
import picture from "../../assets/images/gallery/picture.jpeg";
import president from "../../assets/images/gallery/president.jpeg";
import pisshure from "../../assets/images/gallery/pisshure.jpeg";

const Gallery = () => {
    return(
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                   <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Gallery</h2>
        
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {/* Gallery images */}
                        <div className="overflow-hidden rounded-lg shadow-md">
                <img
                  src={lamp}
                  alt="Gallery Image 1"
                  className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
                />
                        </div>
                        <div className="overflow-hidden rounded-lg shadow-md">
                <img
                  src={outreach}
                  alt="Gallery Image 2"
                  className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
                />
                        </div>
                        <div className="overflow-hidden rounded-lg shadow-md">
                <img
                  src={market}
                  alt="Gallery Image 3"
                  className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
                />
                        </div>
                        <div className="overflow-hidden rounded-lg shadow-md">
                <img
                  src={picture}
                  alt="Gallery Image 4"
                  className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
                />
                        </div>
                        <div className="overflow-hidden rounded-lg shadow-md">
                <img
                  src={president}
                  alt="Gallery Image 5"
                  className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
                />
                        </div>
                        <div className="overflow-hidden rounded-lg shadow-md">
                <img
                  src={[pisshure]}
                  alt="Gallery Image 6"
                  className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
                />
                        </div>
                    </div>
                </div>
    );
}

export default Gallery;