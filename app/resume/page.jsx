import Image from 'next/image';
import Footer from '@/components/footer';

export const metadata = {
    title: 'Resume - Andrew Ye',
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

export default function Resume() {
    const resume = [
        {
            role: "Research Assistant – Data Science",
            dates: "Mar 2023 – Present",
            company: "Stephen M. Ross School of Business; Business Strategy Unit",
            location: "Ann Arbor, MI",
            image: "/logos/umich-ross.jpeg",
            bullets: [
                {
                    text: "Led data engineering and analytics workstream on research project to determine impact of company mission on candidate attraction",
                    subBullets: [
                        "Developed a custom script to efficiently download and organize data from 5,000 candidate resumes, streamlining the experimental data intake process",
                        "Engineered an applicant tracking system and server to manage candidate applications and track communication history, enhancing operational transparency",
                        "Conducted an in-depth analysis of demographic factors (race, ethnicity, gender) and their impact on candidate perception of company attractiveness, providing actionable insights for diversity and inclusion initiatives"
                    ]
                },
                {
                    text: "Developed new data intake strategy and operating model to accelerate project timelines for research project by 90%",
                    subBullets: [
                        "Analyzed and aggregated Saudi Arabian financial statements, designing an algorithm to automate data extraction, comparison, and accuracy checks, reducing required manpower",
                        "Developed and implemented a new standard operating procedure for the team to increase efficiency of data management, including data collection, cleanup, and analysis; process scaled to entire research group"
                    ]
                }
            ]
        },
        {
            role: "Research Assistant",
            dates: "May 2022 – Jul 2023",
            company: "College of LSA; American Culture Department",
            location: "Ann Arbor, MI",
            image: "/logos/umich-lsa.jpeg",
            bullets: [
                {
                    subBullets: [
                        "Cross-referenced multiple sources, studied media narratives, and analyzed politician responses to document 100+ detailed incidents of how AAPI community experienced and combated COVID-19 related harassment",
                        "Reviewed and analyzed articles to identify relevant hate crime information for research scope, managing database cleanliness by deduplicating and updating entries to ensure accuracy and consistency over time",
                        "Identified communication inefficiencies and convinced supervisor to adopt Slack instead of email to preserve information continuity for other research assistants across the lab"
                    ]
                }
            ]
        },
        {
            role: "Vice President of External Affairs",
            dates: "Jan 2022 – May 2024",
            company: "Michigan Data Science Team",
            location: "Ann Arbor, MI",
            image: "/logos/mdst.png",
            bullets: [
                {
                    subBullets: [
                        "Launched “Data Science for Everyone” initiative and started a recruiting campaign by coordinating with 6 academic departments to host an exploration fair; resulted in 150% increase in applications (350 received in total)",
                        "Negotiated with Fortune 500 corporations to secure $1.9k in funding for cloud infrastructure",
                        "Coordinated five company events to connect 200+ students to potential data-driven careers in diverse range of industries and empowering them to engage with emerging technologies",
                        "Led team of three to redesign club’s website and standardized fonts, style, and graphic designs, growing traffic by 50%"
                    ]
                }
            ]
        },
        {
            role: "Founding Member & Head of Outreach",
            dates: "Jul 2023 – May 2024",
            company: "M-Hub",
            image: "/logos/m-hub.png",
            location: "Ann Arbor, MI",
            bullets: [
                {
                    subBullets: [
                        "Co-founded a club to connect undergraduates with faculty for career advancement and professional development, hosted 5 professors for speaker events for the first semester",
                        "Collaborated with team of 5 people to start Ross Business Review: a journal devoted to highlight research at Ross; designed and built website to disseminate information about the mission "
                    ]
                }
            ]

        }
    ];


    return (
        <div>
            <div className='bg-gradient-to-b from-slate-300 dark:from-slate-700 to-gray-200 dark:to-gray-800'>
                <div className="container mx-auto px-2 py-32">
                    <h1 className='text-5xl font-extrabold text-center'>
                        My Resume
                    </h1>
                </div>
            </div>
            <section className='bg-gradient-to-t from-slate-300 dark:from-slate-700 to-gray-200 dark:to-gray-800'>
                <div className="container mx-auto py-4 px-2">
                    <div className='py-2'>
                        <h2 className="text-3xl font-bold">
                            EDUCATION
                        </h2>
                        <div className="divider my-0"></div>
                        <Experience data={{
                            "company": "GPA:3.79/4.00, James B. Angell Scholar",
                            "dates": "Aug 2021 - May 2024",
                            "role": "Bachelor of Science in Data Science, University of Michigan",
                            "location": "Ann Arbor, MI",
                            "image": "/logos/michigan.jpeg",

                        }} ><p>
                                <span className="font-bold">Coursework:</span> Game Theory, Applied Regression, Conversational AI, Intro Machine Learning, Data Structures & Algorithms, Intro
                                Computer Security, Business Strategy, Micro & Macro Economics
                            </p></Experience>
                    </div>
                    <div className='py-2'>
                        <h2 className="text-3xl font-bold">
                            EXPERIENCE
                        </h2>
                        <div className="divider my-0"></div>
                        {resume.map((experience) => <Experience key={experience.company} data={experience} />)}
                    </div>
                </div>
            </section>
            <Footer />

        </div>
    );
}

function Experience({ data, children }) {
    return (
        <div className='p-4 border border-slate-700 dark:border-white my-6 rounded-lg'>
            <div className="resume-grid mb-3">
                <Image className="w-[56px] h-[56px] mr-2 object-cover rounded row-span-2" width={56} height={56} src={data?.image} alt={`${data.company} logo`} />
                <div>
                    <h3 className='font-bold'>{data.role}</h3>
                    <span>{data.company}</span>
                </div>
                <div className='md:justify-self-end'>
                    <span>{data.dates}</span>
                    <span className='block'>{data.location}</span>
                </div>
            </div>
            {data?.bullets && (
                <div className='pl-4'>
                    {data.bullets.map((bullet, index) => (
                        <div key={index} className='mb-2'>
                            <div>{bullet.text}</div>
                            {bullet.subBullets && (
                                <ul className='pl-4 list-disc'>
                                    {bullet.subBullets.map((subBullet, subIndex) => (
                                        <li className='mb-1' key={subIndex}>{subBullet}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            )}
            {children}
        </div>
    );
}
