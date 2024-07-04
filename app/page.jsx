import Hero from '@/components/hero';
import Image from 'next/image';
import Link from 'next/link';

import Button from '@/components/button';
import Footer from '@/components/footer';
import ProjectSection from '@/components/projectSection';
import { getProjectsData } from "@/lib/projects"

export const metadata = {
  title: 'Andrew Ye',
  icons: {
    icon: '/logo.png',
    // shortcut: '/shortcut-icon.png',
    // apple: '/apple-icon.png',
    // other: {
    //   rel: 'apple-touch-icon-precomposed',
    //   url: '/apple-touch-icon-precomposed.png',
    // },
  },
}

export default async function Home() {
  return (
    <div>
      <Hero />
      <section className='py-10 bg-slate-300 dark:bg-slate-700'>

        <div className='container mx-auto px-2 flex items-center content-between flex-col lg:flex-row gap-4'>
          <Image
            className="rounded h-[400px] w-auto object-cover lg:mr-auto "
            width={500}
            height={500}
            src="/andrew_ye.jpeg"
            alt="Andrew Ye"
          />
          <div className='lg:w-1/2'>
            <h2 className='text-3xl font-bold mb-2'>A little more about me</h2>
            <p className='mb-2'>I'm a recent University of Michigan grad, where I studied Data Science. I have a background in data science & engineering, software development, and quantitative research. I have honed my skills in data engineering, statistical analysis, and project management through diverse research projects and leadership roles on campus.</p>
            <p className="mb-2">Currently, I am a Research Assistant at the Stephen M. Ross School of Business, where I lead data analytics efforts to explore the impact that corporate mission and values has on attracting candidates.</p>
            <p className="mb-2">Core languages that I am fluent in include C++, Java, Python, SQL, and R. I am passionate about leveraging data to drive meaningful insights and business decisions, and I am eager to contribute to innovative projects and businesses to further develop my expertise in data science and engineering.</p>
            <p className='mb-4'>I am also an avid hiker and traveler. I&apos;ve been to 30 different US states and 10 national parks - my favorite hike is Angels Landing. I also enjoy going to Michigan Football games - Go Blue!</p>
          </div>
        </div>
      </section>

      <Footer />

    </div>
  );
}

