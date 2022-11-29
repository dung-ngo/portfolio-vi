import Head from 'next/head';
import { useState } from 'react';
import { CgDarkMode } from 'react-icons/cg';
import { BiUpArrowCircle } from 'react-icons/bi';
import Introduction from './UI/Introduction';
import About from './UI/About';
import Contact from './UI/Contact';
import Skillset from './UI/Skillset';
import OtherSkill from './UI/OtherSkill';
import Footer from './layout/Footer';

export default function Home() {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Dung Ngo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900' style={{ width: 'fit-content' }}>
        <section id='intro'>
          <nav className='bg-white top-0 py-10 mb-12 flex justify-between dark:bg-gray-900'>
            <h1 className='text-xl font-burtons dark:text-white'>DungNgo</h1>
            <ul className='flex items-center'>
              <li>
                <CgDarkMode
                  className='cursor-pointer text-2xl dark:text-white'
                  onClick={() => setDarkMode(!darkMode)}
                />
              </li>
              <li>
                <a className=' bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href="../public/Dung_Ngo_Resume.pdf" download>
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <Introduction />
        </section>

        <section id='about'>
          <About />
        </section>

        <section>
          <Skillset />
        </section>

        <section>
          <OtherSkill />
        </section>
        <section id='contact'>
          <Contact />
        </section>
        <section>
          <hr className='my-10' />
          <Footer />
        </section>
        <div className='text-white up-arrow'>
          <a href="#intro"><BiUpArrowCircle /></a>
        </div>
      </main>
    </div>
  )
}
