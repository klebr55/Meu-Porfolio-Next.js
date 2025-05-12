"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */
import { Backend_skill, Frontend_skill, Full_stack, Other_skill, Skill_data } from '@/constants'
import { scale } from 'framer-motion'
import { transform } from 'next/dist/build/swc/generated-native'
import SkillText from '../sub/SkillText'
import React from 'react'
import SkillDataProvider from '../sub/SkillDataProvider'
import { useEffect, useRef } from 'react';

const Skills = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play();
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 } 
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id='skills'
      style={{transform: "scale(0.9)"}}
      className='flex flex-col items-center justify-center gap-3 h-full relative pb-80 overflow-hidden py-20 z-[20]'
    >
      <SkillText />
      <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
        {Skill_data.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
        {Frontend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
        {Backend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
        {Full_stack.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
        {Other_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className='w-full h-full absolute'>
        <div className='w-full h-full z-[10] opacity-30 absolute flex items-center justify-center bg-cover'>
          <video
            ref={videoRef}
            className='w-full h-auto'
            preload="auto"
            playsInline
            loop
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  )
}

export default Skills