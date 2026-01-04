import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { userData } from '../data/userContent';
import profileImg from '../assets/profile_professional.png';

const LeftSidebar = () => {
    const [activeSection, setActiveSection] = React.useState('');

    React.useEffect(() => {
        const sections = ['about', 'experience', 'projects'];
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.3 // 30% visibility
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, observerOptions);

        sections.forEach(id => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="flex flex-col items-center text-center lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 lg:items-start lg:text-left">
            <div>
                <div className="mb-8 w-48 overflow-hidden rounded-full border-2 border-teal-400/50 shadow-lg mx-auto lg:mx-0">
                    <img src={profileImg} alt={userData.name} className="h-full w-full object-cover" />
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                    <a href="/">{userData.name}</a>
                </h1>
                <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                    {userData.title}
                </h2>
                <p className="mt-4 max-w-xs leading-normal text-slate-400 mx-auto lg:mx-0">
                    {userData.tagline}
                </p>

                <nav className="nav hidden lg:block" aria-label="In-page jump links">
                    <ul className="mt-16 w-max">
                        {['About', 'Experience', 'Projects'].map((item) => {
                            const lowerItem = item.toLowerCase();
                            const isActive = activeSection === lowerItem;
                            return (
                                <li key={item}>
                                    <a
                                        className={`group flex items-center py-3 ${isActive ? 'active' : ''}`}
                                        href={`#${lowerItem}`}
                                        onClick={(e) => scrollToSection(e, lowerItem)}
                                    >
                                        <span className={`mr-4 h-px transition-all group-hover:w-16 group-hover:bg-teal-300 group-focus-visible:w-16 group-focus-visible:bg-teal-300 motion-reduce:transition-none ${isActive ? 'w-16 bg-teal-300' : 'w-8 bg-slate-600'}`}></span>
                                        <span className={`text-xs font-bold uppercase tracking-widest group-hover:text-slate-200 group-focus-visible:text-slate-200 ${isActive ? 'text-slate-200' : 'text-slate-500'}`}>
                                            {item}
                                        </span>
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>

            <ul className="mt-8 flex items-center justify-center lg:justify-start lg:ml-1" aria-label="Social media">
                <li className="mr-5 text-xs">
                    <a className="block hover:text-slate-200" href={userData.socialLinks.github} target="_blank" rel="noreferrer">
                        <span className="sr-only">GitHub</span>
                        <Github className="h-6 w-6" />
                    </a>
                </li>
                <li className="mr-5 text-xs">
                    <a className="block hover:text-slate-200" href={userData.socialLinks.linkedin} target="_blank" rel="noreferrer">
                        <span className="sr-only">LinkedIn</span>
                        <Linkedin className="h-6 w-6" />
                    </a>
                </li>
                <li className="mr-5 text-xs">
                    <a className="block hover:text-slate-200" href={userData.socialLinks.email} target="_blank" rel="noreferrer">
                        <span className="sr-only">Email</span>
                        <Mail className="h-6 w-6" />
                    </a>
                </li>
            </ul>
        </header>
    );
};

export default LeftSidebar;
