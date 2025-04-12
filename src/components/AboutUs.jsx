import React, { useState } from 'react';

// Importing icons
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';

// Importing images
import corper from "../assets/images/corpers.jpg";
import timer from "../assets/images/timer.png";

// Features data
const features = [
  {
    name: 'Time for empowerment',
    description: 'Empowering Communities through Digital Education and Inclusive Opportunities',
    icon: ServerIcon,
  },
  {
    name: 'Skill for growth',
    description: 'Digital Onboarders empowers YNEETs (youth not in education, employment, or training) with in-demand skills needed to access jobs or for starting businesses',
    icon: CloudArrowUpIcon, // Providing a fallback icon
  },
]

const AboutUs = () => {
  return (
    <div>
      {/* About Section */}
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div className="lg:pt-4 lg:pr-8">
          <div className="lg:max-w-lg">
            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              DO-DEEL OGUN STATE
            </p>
            <p className="mt-6 text-lg/8 text-gray-600">
              When it comes to tech for youths, do-deel is what you are looking for.
              We are dedicated to transforming lives by providing essential digital skills,
              supporting local businesses, and fostering sustainable community development.
            </p>
            <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-6">
                  {feature.icon ? (
                    <feature.icon className="h-10 w-10 text-indigo-600" />
                  ) : (
                    <img width={80} height={80} src={timer} alt={feature.name} className="flex-shrink-0" />
                  )}
                  <div>
                    <dt className="font-semibold text-gray-900 text-xl">{feature.name}</dt>
                    <dd className="mt-2">{feature.description}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <img
          alt="Product screenshot"
          src={corper}
          width={2432}
          height={1442}
          className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
        />
      </div>

      <div style={{marginTop: "150px"}} className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            <div>
              <img
                src={corper}
                alt="Community impact"
                className="rounded-xl shadow-xl ring-1 ring-gray-400/10 w-full"
              />
            </div>
            <div className="lg:pt-4">
              <h2 className="text-4xl font-semibold text-gray-900 sm:text-5xl">DO-DEEL OGUN STATE</h2>
              <p className="mt-6 text-gray-600 text-lg">
                When it comes to tech for youths, Do-Deel is what you’re looking for. We are transforming lives by
                providing essential digital skills, supporting local businesses, and fostering sustainable community
                development.
              </p>
              <dl className="mt-10 space-y-8 text-base text-gray-600">
                {features.map((feature) => (
                  <div key={feature.name} className="flex items-start gap-6">
                    <img src={timer} alt="icon" width={60} className="flex-shrink-0" />
                    <div>
                      <dt className="text-xl font-semibold text-gray-900">{feature.name}</dt>
                      <dd className="mt-2">{feature.description}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>
            
          </div>

    </div>
  );
};

export default AboutUs;
