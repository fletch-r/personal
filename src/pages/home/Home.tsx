import React from 'react';
import Header from './sections/Header';
import PersonalProjects from './sections/PersonalProjects';
import WorkProjects from './sections/WorkProjects';
import Skills from './sections/Skills';

function Home() {
  return (
    <article className='flex flex-col items-center gap-14 md:gap-16 h-full mx-auto'>
      <Header />

      <div className="flex flex-col gap-20 h-full">
        <WorkProjects />

        <Skills />

        <PersonalProjects />
      </div>
    </article>
  )
}

export default Home