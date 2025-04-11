import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/378b4506-308a-45c6-b0db-595f8095f66c" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-yellow-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'> Interested in working together? Submit the form below or email at - sweaniz@icloud.com </p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Thou Name is a must' name='name' required='true'/>
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='tataki@gmail.com' name='email' required='true' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='What is thou request?' required='true'></textarea>
            <button className='text-white border-2 hover:bg-yellow-600 hover:border-yellow-600 duration-300 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact