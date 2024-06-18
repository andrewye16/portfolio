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
            "role": "Research Assistant – Data Science",
            "dates": "Mar 2023 – Present",
            "company": "Stephen M. Ross School of Business; Business Strategy Unit",
            "location": "Ann Arbor, MI",
            "image": "/logos/umich-ross.jpeg",
            "bullets": [
                "Designed system using React and Amazon AWS to track 5000+ candidates’ applications and researched how corporate purpose affects willingness to apply using OLS regression",
                "Implemented ETL process using Python, pandas, and NumPy to clean, merge, and aggregate data, resulting in 90% time saved per task, and completion of process 2 months ahead of schedule",
                "Created datasets of financial performances of 200+ Saudi Arabian firms by reconciling and verifying with original financials, generating a total of 190 variables for 3,000 records to analyze"
            ]
        },
        {
            "role": "Research Assistant",
            "dates": "May 2022 – Jul 2023",
            "company": "College of LSA; American Culture",
            "location": "Ann Arbor, MI",
            "image": "/logos/umich-lsa.jpeg",
            "bullets": [
                "Cross-referenced multiple sources, studied media narratives, and analyzed politician responses to document 100+ detailed incidents of how AAPI community experienced and combated COVID-19 related harassment",
                "Maintained database of 13,000 records intended for government agencies, universities, news medias, and general public",
                "Identified communication inefficiencies and convinced supervisor to adopt a new platform to preserve clarifications of coding for other research assistants"
            ]
        },
        {
            "role": "Vice President of External Affairs",
            "dates": "Jan 2022 – May 2024",
            "company": "Michigan Data Science Team",
            "location": "Ann Arbor, MI",
            "image": "/logos/mdst.png",
            "bullets": [
                "Launched “Data Science for Everyone” initiative and started a recruiting campaign by coordinating with 6 academic departments; resulted in 150% increase in applications (350 received in total)",
                "Negotiated with multiple corporations (include 2 F500), securing $1.9k in funding for cloud infrastructure",
                "Coordinated 5 company events to connect 200+ students to potential data-driven careers in diverse range of industries and encouraged them to engage with emerging technologies"
            ]
        },
        {
            "role": "MOOC Data Analysis (Sponsored Project with RapidCanvas)",
            "company": "Michigan Data Science Team",
            "image": "/logos/mdst.png",
            "bullets": [
                "Developed a predictive model to forecast Massive Open Online Course students’ dropout rate, achieving 74% accuracy using advanced machine learning models such as XGBoost and Random Forest within scikit-learn",
                "Processed and analyzed over 280k user activity logs via Google Big Query, utilized clustering techniques to categorize customer profiles",
                "Presented findings at an open-house expo event to 80 students and faculties from different disciplines"
            ]
        // },
        // {
        //     "role": "Improve Detroit Dataset Analysis (Personal Project)",
        //     "company": "Michigan Data Science Team",
        //     "image": "/logos/mdst.png",
        //     "bullets": [
        //         "Utilized Python and Tableau for analysis over 120k debris-related service requests submitted through the Improve Detroit platform over a decade, exploring correlation with socioeconomic status of different neighborhoods",
        //         "Enhanced data reliability and completeness by using the Google Geocoding API for missing data interpolation and applying on-device Natural Language Processing, large LLM, and OpenAI Generative AI API to categorize request types",
        //         "Developed regression models to quantify impact of socioeconomic factors on service request patterns, generating insights for urban development and policy formulation"
        //     ]
        // }, {
        //     "role": "Founding Member & Head of Outreach",
        //     "dates": "Jul 2023 – Present",
        //     "company": "M-Hub",
        //     "image": "/logos/m-hub.png",
        //     "location": "Ann Arbor, MI",
        // },
        // {
        //     "role": "Volunteer",
        //     "dates": "Jan 2020 – May 2021",
        //     "company": "International Service Corps",
        //     "location": "Albuquerque, NM",
        //     "image": "/logos/IESC.jpeg",
        }
    ];


    return (
        <div>
            <div className='bg-gradient-to-b from-slate-300 dark:from-slate-700 to-gray-200 dark:to-gray-800'>
                <div className="container mx-auto px-2 py-32">
                    <h1 className='text-5xl font-extrabold text-center'>
                        My Resume 📄
                    </h1>
                </div>
            </div>
            <section className='bg-gradient-to-t from-slate-300 dark:from-slate-700 to-gray-200 dark:to-gray-800'>
                <div className="container mx-auto py-4 px-2">
                    <div className='py-2'>
                        <h2 className="text-3xl font-bold">
                            EDUCATION 👨‍🎓
                        </h2>
                        <div className="divider my-0"></div>
                        <Experience data={{
                            "company": "University of Michigan",
                            "dates": "Aug 2020 - May 2024",
                            "role": "Data Science Major Bachelor of Science - 3.79/4.00 GPA",
                            "location": "Ann Arbor, MI",
                            "image": "/logos/michigan.png",

                        }} ><p>
                                <span className="font-bold">Coursework:</span> Game Theory, Applied Regression, Conversational AI, Intro Machine Learning, Data Structures & Algorithms, Intro
                                Computer Security, Business Strategy, Micro & Macro Economics
                            </p></Experience>
                    </div>
                    <div className='py-2'>
                        <h2 className="text-3xl font-bold">
                            EXPERIENCE 👷‍♂️
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
        <div className='p-4 border border-slate-700 dark:border-white my-6 rounded-lg' >

            <div className="resume-grid mb-3">
                <Image className="w-[56px] h-[56px] mr-2 object-cover rounded row-span-2" width={56} height={56} src={data?.image} alt={data.company + " logo"} />
                <h3 className='font-bold'>{data.company}</h3>
                <span>{data.dates}</span>
                <span className=''>{data.role}</span>
                <span className='italic md:justify-self-end'>{data.location}</span>
            </div>
            {data?.bullets && <ul className='pl-4 list-disc'>
                {data.bullets.map((bullet, index) => {
                    return <li className='mb-1' key={index} >{bullet}</li>
                })}
            </ul>}
            {children}
        </div>
    )
}