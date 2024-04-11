"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const ContactSection = () => {
  return (
    <section id="contact">
      <div className='md:grid md:grid-cols-2 lg:justify-items-center mt-8 py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <div className="text-left flex flex-col h-full justify-center">
          <h1 className="text-4xl font-mono text-white my-2">Let&apos;s connect</h1>
          <p className="text-base lg:text-lg text-[#ADB7BE] mb-6"> 
            I am actively seeking new opportunities, so please do not hesitate to reach out if you are interested in collaborating or just want to say hello!
          </p>

          <div className="socials flex flex-row gap-2">
            <Link href="https://github.com/Lev4n" target="_blank">
              <Image src="/images/github-icon.svg" alt="Github Icon" width={50} height={50} />
            </Link>
            <Link href="https://www.linkedin.com/in/levan-lomidze/" target="_blank">
              <Image src="/images/linkedin-icon.svg" alt="Linkedin Icon" width={50} height={50} />
            </Link>
          </div>
        </div>
        <Image src="/images/contact-me.png" alt="contact me" width={500} height={500} />
      </div>
    </section>
  );
};

export default ContactSection;
