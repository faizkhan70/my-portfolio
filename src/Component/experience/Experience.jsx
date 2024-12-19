import React from 'react';

const Experience = () => {
  const experiences = [
    {
      year: '2024',
      company: 'Water Software',
      roles: ['Front End Developer', 'UI & Developer'],
    },
    {
      year: '2023',
      company: 'Upright instiute',
      roles: [' Front End Developer', 'UI/UX Research'],
    },
   
  ];

  return (
    <div className="bg-black text-white py-16 px-4 sm:px-8 lg:px-32">
      <h2 className="text-center text-4xl font-bold mb-12 tracking-wider">
        EXPERIENCE
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
        {experiences.map((exp, index) => (
          <div key={index} className="flex items-center space-x-8">
            {/* Year Section */}
            <span className="text-6xl font-extrabold text-gray-300">
              {exp.year}
            </span>
            {/* Divider and Experience Details */}
            <div className="flex flex-col space-y-2 border-l-2 border-gray-500 pl-6">
              <h3 className="text-lg font-semibold">{exp.company}</h3>
              {exp.roles.map((role, roleIndex) => (
                <p key={roleIndex} className="text-sm text-gray-400">
                  - {role}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
