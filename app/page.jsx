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
            <p className='mb-2'>I graduated from the University of Michigan and am working as a research assistant for Ross School of Business. I have multiple years of experience in academia and integrating data science tools to empower large scale experiments / big data analysis.</p>
            <p className="mb-2">I am passionate about data science because it allows me to break down complex and ambiguous problems into rational, manageable pieces. Through this process, I can uncover the big picture from a collection of details, providing more certainty and quantitative justification to our world. I hope to use data science to make a meaningful impact on those who need it most.</p>
            <p className='mb-4'>I am an avid hiker and traveler. I've been to 30 different US states and 10 national parks - my favorite hike is Angels Landing. I also enjoy going to Michigan Football games - Go Blue!</p>
            <Button text="View My Resume 📄" href='/resume' />
          </div>
        </div>
      </section>

      <Footer />

    </div>
  );
}

