"use client";
import ArrowIcon from '../assets/icons/arrow-w.svg';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { AnimatedGradientTextDemo } from './animatedtext';

export const Hero = () => {
  return (
    <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] sm:py-24 relative overflow-clip">
      <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] llg:h-[800px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>
      <div className="container relative">
        <div className="flex items-center justify-center -mt-10">
          <AnimatedGradientTextDemo />
        </div>
        <div className="flex justify-center mt-8">
          <div className="inline-flex relative">
            <h1 className='text-7xl sm:text-9xl font-bold tracking-tightner text-center inline-flex'>
              Vision<br/>
            </h1>
          </div>
        </div>
        <div className="flex justify-center">
          <p className='text-xl text-center mt-8 max-w-md'>
          Experience the future of Chatbot services with our groundbreaking Vision Chatbot ! This revolutionary Chatbot can answer questions related to any image given by user. Say goodbye to other Vision Chatbots and hello to Vision Chatbot. It is  not just a chatbot
          
          
          it is the smartest computer vision integrated Chatbot of all time!
          </p>
        </div>
        <div className="flex justify-center mt-8">
          <button className='bg-white text-black py-3 px-5 rounded-lg font-medium'>Try Vision Chatbot</button>
        </div>
      </div>
    </div>
  );
};
