import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-yellow-600'>
              About
            </p>
          </div>
      
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div >
              <p className='sm:text-right text-4xl font-bold'>Welcome to my portfolio. Please take a look around.</p> 
              <div className= 'pt-4 flex justify-start items-start sm:justify-end sm:items-end'> 
                    <a href="../pdf/cvsweaniz.pdf" download>
                    <button className='text-center rounded-lg px-4 py-3 m-2  bg-white text-gray-700 font-bold text-md hover:bg-gray-300 hover:scale-110 duration-500'>
                      View CV
                    </button> </a>
               </div>
            </div>
            <div>
              <p>With a strong foundation in software development, complemented by experience in marketing, branding, and management, 
                I am passionate about creating solutions that not only solve problems but also push the boundaries of innovation. 
                In building this portfolio, I've utilized cutting-edge technologies such as React, Tailwind CSS, and JavaScript, 
                <br/>to ensure a sleek and responsive user experience.
                Feel free to explore, and don't hesitate to reach out for collaborations or opportunities!
              </p>  
            </div>
          </div>
          
      </div>
    </div>
  );
};

export default About;


{/* <div className= 'flex justify-center items-center'> 
<a
  href="../pdf/cvsweaniz.pdf" 
  download
>
 <button className='text-center rounded-lg px-4 py-3 m-2  bg-white text-gray-700 font-bold text-md hover:bg-gray-300 hover:scale-110 duration-500'>
  Download my CV
 </button>
</a> </div> */}