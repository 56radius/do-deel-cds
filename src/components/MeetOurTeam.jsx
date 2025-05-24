import React, { useState } from 'react';

import corpers from "../assets/images/gallery/lamp.jpeg"

const teamData = {
  2023: [
    { name: "John Doe", position: "President", photo: corpers },
    { name: "Jane Smith", position: "Vice President", photo: "https://via.placeholder.com/100" },
  ],
  2024: [
    { name: "Alex Johnson", position: "President", photo: "https://via.placeholder.com/100" },
    { name: "Linda Kim", position: "Vice President", photo: "https://via.placeholder.com/100" },
  ],
};

const MeetOurTeam = () => {
  const [selectedYear, setSelectedYear] = useState(Object.keys(teamData)[0]);

  return (
    <div className="bg-white py-20 px-4 sm:px-6 lg:px-8" id="Team">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900">Meet Our Team</h2>
        <div className="mt-6 flex justify-center gap-4 overflow-x-auto py-2">
          {Object.keys(teamData).map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedYear === year ? "bg-green-600 text-white" : "bg-gray-200 text-gray-700"
              }`}
            >
              {year}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
          {teamData[selectedYear].map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-gray-50 p-6 rounded-lg shadow-md"
            >
              <img src={member.photo} alt={member.name} className="w-24 h-24 rounded-full mb-4" />
              <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeetOurTeam;
