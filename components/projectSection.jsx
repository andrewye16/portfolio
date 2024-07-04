import Image from 'next/image';
import Link from 'next/link';
import Icon from './icon';

export default function ProjectSection({ data }) {
    if (!Array.isArray(data)) {
        console.error("Data passed to ProjectSection is not an array");
        return null;
    }

    return (
        <section className="container mx-auto px-2 py-10 relative">
            {data.map((project, index) => (
                <div key={index} className="flex items-center mb-10">
                    <div className="bg-slate-400 dark:bg-slate-600 drop-shadow p-4 rounded-lg w-full">
                        <div className='flex text-3xl bold justify-between items-center mb-2'>
                            <h2 className=''>{project.name}</h2>
                            <div className='flex gap-2'>
                                {project.link && <Link className='' href={project.link} target='_blank'>
                                    <Icon name="open" />
                                </Link>}
                            </div>
                        </div>
                        <div className="flex">
                            <div className="w-1/2 p-4">
                                <ProjectImage image={project.desktopImage} name={project.name} />
                            </div>
                            <div className="w-1/2 p-4">
                                <p>{project.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}

function ProjectImage({ name, image }) {
    if (name && image) {
        return (
            <div className="w-full">
                <Image
                    className="rounded-lg"
                    width={1920}
                    height={1080}
                    src={image}
                    alt={name}
                />
            </div>
        );
    } else {
        return null;
    }
}