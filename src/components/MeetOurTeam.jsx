import React, { useState } from 'react';
import corpers from "../assets/images/gallery/lamp.jpeg";

import merit from "../assets/images/team/2025/merit.jpeg";

const teamData = {
  2023: [
    { name: "John Doe", position: "President", photo: corpers },
    { name: "Jane Smith", position: "Vice President", photo: "https://via.placeholder.com/100" },
    { name: "Alex Johnson", position: "President", photo: "https://via.placeholder.com/100" },
    { name: "Linda Kim", position: "Vice President", photo: "https://via.placeholder.com/100" },
    { name: "Linda Kim", position: "Vice President", photo: "https://via.placeholder.com/100" },
    { name: "Linda Kim", position: "Vice President", photo: "https://via.placeholder.com/100" },
    { name: "Linda Kim", position: "Vice President", photo: "https://via.placeholder.com/100" },
    { name: "Linda Kim", position: "Vice President", photo: "https://via.placeholder.com/100" },
  ],
  2024: [
    { name: "Alex Johnson", position: "President", photo: "https://via.placeholder.com/100" },
    { name: "Linda Kim", position: "Vice President", photo: "https://via.placeholder.com/100" },
  ],
  2025: [
    { name: "Alex Johnson", position: "President", photo: "https://via.placeholder.com/100" },
    { name: "Merit Mohammed", position: "Vice President", photo: merit },
    { name: "Linda Kim", position: "Vice President", photo: "https://via.placeholder.com/100" },
    { name: "Linda Kim", position: "Vice President", photo: "https://via.placeholder.com/100" },
    { name: "Linda Kim", position: "Vice President", photo: "https://via.placeholder.com/100" },
    { name: "Linda Kim", position: "Vice President", photo: "https://via.placeholder.com/100" },
  ],
  
};

const MeetOurTeam = () => {
  const years = Object.keys(teamData).sort((a, b) => b - a);
  const [selectedYear, setSelectedYear] = useState(years[0]);

  return (
    <div className="bg-white py-20 px-4 sm:px-6 lg:px-8" id="Team">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Meet Our Team</h2>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Timeline */}
          <div className="relative lg:w-40 flex justify-center lg:justify-start">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-green-600 rounded-md"></div>

            {/* Dots with years */}
            <div className="flex flex-col gap-30 mt-2 w-full">
              {years.map((year) => (
                <div
                  key={year}
                  className="relative flex items-center"
                  onClick={() => setSelectedYear(year)}
                >
                  {/* Dot in line */}
                  <div
                    className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full z-10 transition duration-300 ${
                      selectedYear === year
                        ? 'bg-green-600 border-2 border-green-700'
                        : 'bg-white border-2 border-gray-400'
                    }`}
                  />

                  {/* Year label */}
                  <div className="ml-6 cursor-pointer">
                    <span
                      className={`text-sm font-medium ${
                        selectedYear === year ? 'text-green-700' : 'text-gray-600'
                      }`}
                    >
                      {year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Team Members */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 flex-1">
            {teamData[selectedYear].map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mb-3 object-cover"
                />
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 text-center">{member.name}</h3>
                <p className="text-sm text-gray-600 text-center">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetOurTeam;
