import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import { TextHoverEffect } from './ui/text-hover-effect';
import { TextGenerateEffect } from './ui/text-generate-effect';
import TextType from './ui/text-type';

const jobTitle = "I'm a Full-Stack Developer"
const words = "Dedicated to creating impactful and innovative digital solutions that drive success in the tech industry. With a focus on building responsive, user-friendly web applications, I blend creativity with technical expertise to deliver seamless digital experiences."
const Home = () => {
  return (
    
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
      
        <p className='text-yellow-600'>Hi, my name is</p>
          {/* Animated Name */}
          <div className="w-full h-[10rem] flex items-start justify-start">
              <TextHoverEffect text="Sweaniz N." />
        </div>
        <div>
        <div> 
        <TextType 
          text={jobTitle}
          className="text-2xl sm:text-4xl text-[#8892b0]"
          typingSpeed={75}
          pauseDuration={1500}
          deletingSpeed={50}
          loop={false}
          showCursor={true}
          cursorCharacter="_"
        />
        </div>
        <div>
        <TextGenerateEffect words={words}
          className="text-[#ffffff] pb-2"
        />
        </div>
        </div>
        <div>
          <button  className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow-600 hover:border-yellow-600 duration-300'>
            <Link to='work' smooth={true} duration={500}> View Work</Link>
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span> 
          </button>
        </div>
 
      </div>
    </div>
  );
};

export default Home;
