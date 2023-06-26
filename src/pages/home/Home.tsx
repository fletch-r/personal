import React from 'react';
import Header from './sections/Header';
import PersonalProjects from './sections/PersonalProjects';
import WorkProjects from './sections/WorkProjects';
import Skills from './sections/Skills';

function Home() {
  return (
    <article className='flex flex-col items-center gap-14 md:gap-18 h-full mx-auto'>
      <Header />

      {/* Personal Projects */}
      <PersonalProjects />

      <Skills />

      {/* Work Projects */}
      <WorkProjects />
    </article>
  )
}

export default Home