import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Projects = () => {
  return (
    <div className='flex flex-col items-center justify-center py-20 z-[20]'>
        <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
            My Projects
        </h1>
        <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10'>
            <ProjectCard 
            src="/NextWebsite.png"
            title="Modern Next.js Portfolio"
            description="A modern portfolio website built with Next.js 13, showcasing my skills and projects."
            />
            <ProjectCard 
            src="/CardImage.png"
            title="Interactive Website Cards"
            description="A collection of interactive website cards showcasing various projects and technologies."
            />
            <ProjectCard 
            src="/SpaceWebsite.png"
            title="Space Themed Website"
            description="A space-themed website built with Next.js 13, featuring a responsive design and smooth animations."
            />
        </div>
    </div>
  )
}

export default Projects