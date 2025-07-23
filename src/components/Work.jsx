import React from 'react';
import WorkImg from '../assets/qrcodework.png';
import ToDoList from '../assets/todolist.png';
import BeyondNFT from '../assets/beyondnft.png';
import ShiftEnd from '../assets/ShiftEnd.png';

const Work = () => {
  return (
    <div name='work' className='w-full h-full sm:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-yellow-600'>
            Work
          </p>
          <p className='py-6'> Check out some of my recent work</p>
          <p> !Expo projects are depricated! </p>    
        </div>

{/* Container */}
        <div className='grid grid-cols-1 gap-4'>

            {/* Grid Item */}
            <div
            style={{ backgroundImage: `url(${ShiftEnd}) ` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 duration-300'>
              <div className='text-xl font-bold text-white tracking-wider text-center align-middle p-3'>
                ShiftEnd: Het digitale dagontvangstboek. <br/> The software will be released after the approval of FOD Financiën.<br/> Techstack landing page: ReactJs, Tailwind
              </div>
              <div className='pt-8 text-center'>
                <a href='https://shiftend.be/' target="_blank" rel='noreferrer' >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-110 duration-500'>
                    Try me
                  </button>
                </a>
              </div>
            </div>
          </div>      

          <div
            style={{ backgroundImage: `url(${WorkImg}) ` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 duration-300'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Vanilla JS: QR code Generator
              </span>
              <div className='pt-8 text-center'>
                <a href='https://qrfreecodegenerator.netlify.app/' target="_blank" rel='noreferrer' >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-110 duration-500'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/Swnzz/qrcodegenerator' target="_blank" rel='noreferrer' >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-110 duration-500'>
                    Source Code
                  </button>
                </a>
              </div>
            </div>
          </div>  
          
          <div
            style={{ backgroundImage: `url(${ToDoList}) ` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 duration-300'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React Native: To-Do List App
              </span>
              <div className='pt-8 text-center'>
                <a href='https://expo.dev/@sweaniz/todolist/' target="_blank" rel='noreferrer' >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-110 duration-500'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/Swnzz/rn-todolist' target="_blank" rel='noreferrer' >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-110 duration-500'>
                    Source Code
                  </button>
                </a>
              </div>
            </div>
          </div>  
          <div
            style={{ backgroundImage: `url(${BeyondNFT}) ` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 duration-300'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React Native: NFT marketplace
              </span>
              <div className='pt-8 text-center'>
                <a href='https://expo.dev/@sweaniz/beyondnft' target="_blank" rel='noreferrer' >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-110 duration-500'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/Swnzz/beyondnft' target="_blank" rel='noreferrer' >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-110 duration-500'>
                    Source Code
                  </button>
                </a>
              </div>
            </div>
          </div>  
              
        </div>
      </div>
    </div>

  );
};

export default Work;
