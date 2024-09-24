import React, {  useState } from 'react';
import ModalBox from './Modal.tsx'; 
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';

const Main = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
 

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section>
      
      <div className="mx-5  sm:mx-auto max-w-2xl py-20 sm:py-48 lg:py-10">
          <div className=" sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-300 ring-1 ring-gray-300/10 hover:ring-gray-300/20 sm:mb-0 mb-5 text-center">
              Announcing our big updates arriving very soon.{' '}
              <Link to="/error" className="font-semibold text-indigo-600">
                <span aria-hidden="true" className="absolute inset-0" />
                Read more <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-400 sm:text-5xl">
              
            Bring your writing to life with the {""} <br/>
            <div className='sm:h-[1.1em] h-[2.3em] inline-block bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text'>
            <Typewriter 
        words={["magic of AI voiceovers", "the sound of innovation"]}
        loop={50} // Loop the words 5 times or set to `0` for infinite loop
        cursor
        cursorStyle='_'
        typeSpeed={70} // Speed at which characters are typed
        deleteSpeed={50} // Speed at which characters are deleted
        delaySpeed={4000} // Delay before starting to type the next word
      />
      </div>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Transform your content with the power of AI voiceovers, adding a professional touch to your words. Elevate your projects with natural-sounding, expressive voices that captivate and engage your audience like never before.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a onClick={handleOpenModal}
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Generate now
              </a>
              
            </div>
          </div>
        </div>


      
      {/* Modal component */}
      <ModalBox open={isModalOpen} onClose={handleCloseModal} />
    </section>
  );
};

export default Main;
