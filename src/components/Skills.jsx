import React from 'react';
import TiltedCard from './ui/tilted-card';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Tailwind from '../assets/tailwind.png';
import Laravel from '../assets/laravel.png';
import PHP from '../assets/php.png';
import Firebase from '../assets/firebase.png';
import Typescript from '../assets/typescript.png';
import Sass from '../assets/sass.png';
import Vue from '../assets/vue.png';
import Mysql from '../assets/mysql.png'
import Vuetify from '../assets/vuetify.png';
import Net from '../assets/net.png';
import Csharp from '../assets/csharp.png';

const Skills = () => {
  const skillsData = [
    { name: 'JavaScript', image: JavaScript },
    { name: 'React', image: ReactImg },
    { name: 'Vue', image: Vue },
    { name: 'TypeScript', image: Typescript },
    { name: 'C#', image: Csharp },
    { name: '.NET', image: Net },
    { name: 'Laravel', image: Laravel },
    { name: 'PHP', image: PHP },
    { name: 'MySQL', image: Mysql },
    { name: 'Firebase', image: Firebase },
    { name: 'HTML', image: HTML },
    { name: 'CSS', image: CSS },
    { name: 'Tailwind CSS', image: Tailwind },
    { name: 'Sass', image: Sass },
    { name: 'Vuetify', image: Vuetify },
  ];

  return (
    <div name='skills' className='w-full min-h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full min-h-screen'>
        <div className='text-center mb-12'>
          <p className='text-4xl font-bold inline border-b-4 border-yellow-600'>Skills</p>
          <p className='py-4 text-lg'>These are the technologies I've worked with</p>
        </div>

        {/* Skills Grid */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center'>
          {skillsData.map((skill, index) => (
            <TiltedCard
              key={skill.name}
              imageSrc={skill.image}
              altText={`${skill.name} icon`}
              captionText={skill.name}
              containerHeight="180px"
              containerWidth="140px"
              imageHeight="60px"
              imageWidth="60px"
              scaleOnHover={1.1}
              rotateAmplitude={15}
              showTooltip={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
