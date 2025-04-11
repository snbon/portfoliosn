import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';
import Laravel from '../assets/laravel.png';
import PHP from '../assets/php.png';
import Firebase from '../assets/firebase.png';
import Typescript from '../assets/typescript.png';
import Sass from '../assets/sass.png';
import Java from '../assets/java.png';
import Vue from '../assets/vue.png';
import Mysql from '../assets/mysql.png'
import Vuetify from '../assets/vuetify.png';
import Net from '../assets/net.png';
import Csharp from '../assets/csharp.png';


const Skills = () => {
  return (
    <div name='skills' className='w-full h-full sm:h-screen bg-[#0a192f] text-gray-300 '>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4  flex flex-col justify-center w-full h-full '>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-yellow-600 '>Skills</p>
              <p className='py-4'>These are the technologies I've worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-14 sm:w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-14 sm:w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-14 sm:w-20 mx-auto' src={Vue} alt="HTML icon" />
                  <p className='my-4'>VUE</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-14 sm:w-20 mx-auto' src={Vuetify} alt="HTML icon" />
                  <p className='my-4'>VUETIFY</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-14 sm:w-20 mx-auto' src={Csharp} alt="HTML icon" />
                  <p className='my-4'>C#</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-14 sm:w-20 mx-auto' src={Net} alt="HTML icon" />
                  <p className='my-4'>.NET</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-14 sm:w-20 mx-auto' src={Laravel} alt="HTML icon" />
                  <p className='my-4'>LARAVEL</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-14 sm:w-20 mx-auto' src={PHP} alt="HTML icon" />
                  <p className='my-4'>PHP</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-14 sm:w-20 mx-auto' src={Mysql} alt="HTML icon" />
                  <p className='my-4'>MYSQL</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-14 sm:w-20 mx-auto' src={Firebase} alt="HTML icon" />
                  <p className='my-4'>Firebase</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-14 sm:w-20 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-14 sm:w-20 mx-auto' src={CSS} alt="HTML icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-14 sm:w-20 mx-auto' src={Typescript} alt="HTML icon" />
                  <p className='my-4'>TYPESCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-14 sm:w-20 mx-auto' src={Tailwind} alt="HTML icon" />
                  <p className='my-4'>TAILWIND CSS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-14 sm:w-20 mx-auto' src={Sass} alt="HTML icon" />
                  <p className='my-4'>SASS</p>
              </div>
            
          </div>
      </div>
    </div>
  );
};

export default Skills;
