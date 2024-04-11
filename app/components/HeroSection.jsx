"use client"
import React from 'react';
import Image from 'next/image';
import Link from "next/link";
import { motion } from "framer-motion";
import {TypeAnimation} from 'react-type-animation';

const HeroSection = () => {
  return (
    <section>
      <div className='grid grid-cols-1 sm:grid-cols-12 lg:my-24'>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='col-span-7 place-self-center text-center sm:text-left'
        >
          <h1 className="text-white mb-8 text-4xl sm:text-5xl lg:text-5xl font-mono">
            <span className="bg-clip-text bg-gradient-to-r text-blue-500">Hello there, {""}</span>
            <br/><br />
            <TypeAnimation
              sequence={[
                "I am Levan",
                2000,
                "Web & Mobile Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
            <br />
          </h1>
          <p className="text-[#ADB8BE] text-base sm:text-lg mb-12 lg:text-xl">I am self-taught developer with main focus on web and mobile applications.</p>
          <div>
            <Link
              href="/#contact"
              className="px-10 py-4 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-900 to-blue-500 hover:bg-slate-200 font-mono text-white"
            >
              Get in touch
            </Link>
          </div>
          <br />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='col-span-5 place-self-center mt-4 lg:mt-2'
        >
          <div className="rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={380}
              height={350}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection