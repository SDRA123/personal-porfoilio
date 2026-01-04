import React from 'react';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import { userData } from '../data/userContent';
import { Link } from 'react-router-dom';

const RightContent = () => {
    return (
        <main id="content" className="pt-24 lg:w-1/2 lg:py-24 text-center lg:text-left">

            {/* About Section */}
            <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
                <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
                </div>
                <div>
                    <p className="mb-4 text-slate-400 whitespace-pre-line">
                        {userData.about}
                    </p>
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="mb-24 scroll-mt-16 md:mb-36 lg:mb-48 lg:scroll-mt-24" aria-label="Work experience">
                <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Experience</h2>
                </div>
                <div>
                    <ol className="group/list">
                        {userData.experience.map((job, idx) => (
                            <li key={idx} className="mb-20">
                                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                                    <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label={job.range}>
                                        {job.range}
                                    </header>
                                    <div className="z-10 sm:col-span-6">
                                        <h3 className="font-medium leading-snug text-slate-200">
                                            <div>
                                                {/* <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base" href="#" target="_blank" rel="noreferrer" aria-label={job.title}> */}
                                                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                                <span>{job.title} · <span className="inline-block">{job.company}</span></span>
                                                {/* </a> */}
                                            </div>
                                        </h3>
                                        <p className="mt-2 text-sm leading-normal text-slate-400">
                                            {job.description}
                                        </p>
                                        {job.links && (
                                            <ul className="mt-2 flex flex-wrap justify-center lg:justify-start" aria-label="Related links">
                                                {job.links.map(link => (
                                                    <li key={link.name} className="mr-4">
                                                        <a className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300" href={link.url} target="_blank" rel="noreferrer">
                                                            <ExternalLink className="mr-1 h-3 w-3" />
                                                            <span>{link.name}</span>
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                        <ul className="mt-2 flex flex-wrap justify-center lg:justify-start" aria-label="Technologies used">
                                            {job.skills.map(skill => (
                                                <li key={skill} className="mr-1.5 mt-2">
                                                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                                        {skill}
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Selected projects">
                <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projects</h2>
                </div>
                <div>
                    <ul className="group/list">
                        {userData.projects.map((project) => (
                            <li key={project.id} className="mb-20">
                                <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

                                    <div className="z-10 sm:col-span-8">
                                        <h3 className="font-medium leading-snug text-slate-200">
                                            <div className="flex items-center justify-center lg:justify-start gap-4 mb-2">
                                                <span className="text-base font-bold text-slate-200 group-hover:text-teal-300 transition-colors">
                                                    {project.title}
                                                </span>
                                            </div>
                                        </h3>
                                        <p className="mt-2 text-sm leading-normal text-slate-400">
                                            {project.description}
                                        </p>

                                        <ul className="mt-2 flex flex-wrap justify-center lg:justify-start" aria-label="Technologies used">
                                            {project.tech.map(tech => (
                                                <li key={tech} className="mr-1.5 mt-2">
                                                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                                        {tech}
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* TWO OPTIONS ACTIONS */}
                                        <div className="mt-6 flex flex-wrap gap-4 justify-center lg:justify-start">
                                            {/* Option 1: GitHub */}
                                            {project.links.find(l => l.label === 'GitHub') && (
                                                <a
                                                    href={project.links.find(l => l.label === 'GitHub').url}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="z-10 flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-300 bg-slate-800 border border-slate-700 rounded-lg hover:bg-slate-700 hover:text-white transition-all hover:border-teal-500/50"
                                                >
                                                    <Github className="w-4 h-4" />
                                                    View Code
                                                </a>
                                            )}

                                            {/* Option 2: Details Page */}
                                            {project.hasDetails && (
                                                <Link
                                                    to={`/project/${project.id}`}
                                                    className="z-10 flex items-center gap-2 px-4 py-2 text-sm font-medium text-teal-300 bg-teal-400/10 border border-teal-500/20 rounded-lg hover:bg-teal-400/20 hover:border-teal-500/50 transition-all"
                                                >
                                                    <ExternalLink className="w-4 h-4" />
                                                    Presentation
                                                </Link>
                                            )}
                                        </div>

                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0 mx-auto lg:mx-0">
                <p>
                    Loosely designed in Figma and coded in Visual Studio Code. Built with React and Tailwind CSS, deployed with Vercel.
                    Text is set in the Inter typeface.
                </p>
            </footer>
        </main>
    );
};

export default RightContent;
