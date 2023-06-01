import React from 'react';
import Header from './sections/Header';
import PersonalProjects from './sections/PersonalProjects';
import WorkProjects from './sections/WorkProjects';

function Home() {
  return (
    <article className='flex flex-col items-center gap-14 md:gap-24 h-full mx-auto'>
      <Header />

      {/* Personal Projects */}
      <PersonalProjects />

      {/* Work Projects */}
      <WorkProjects />
    </article>
  )
}

export default Home