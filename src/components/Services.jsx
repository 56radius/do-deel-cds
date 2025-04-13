import React, {useState} from 'react';

//importing icons
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

const services = [
    {
      title: 'Digital Literacy',
      description: 'Empowering youth with essential digital skills to thrive in the modern world.',
      icon: <CloudArrowUpIcon className="w-10 h-10 text-green-600 mx-auto mb-4" />,
    },
    {
      title: 'Business Support',
      description: 'Helping local businesses grow through mentorship and digital tools.',
      icon: <LockClosedIcon className="w-10 h-10 text-green-600 mx-auto mb-4" />,
    },
    {
      title: 'Youth Education',
      description: 'Providing resources and opportunities for learning and career growth.',
      icon: <ServerIcon className="w-10 h-10 text-green-600 mx-auto mb-4" />,
    },
  ];

const Services = () => {
    return(
        <div 
        style={{
          marginTop: "50px"
        }} 
        className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 style={{color: "#FFFDO", fontWeight: 'bold', }} className="text-4xl font-bold text-black"> <strong> What Does Do-Deel Do? </strong> </h2>
          <p className="mt-4 text-lg text-gray-600">
            We are committed to fostering digital literacy, supporting local businesses, and educating the youth.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 text-center"
            >
              {service.icon}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Services;