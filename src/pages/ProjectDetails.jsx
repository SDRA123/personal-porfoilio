import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { userData } from '../data/userContent';

const ProjectDetails = () => {
    const { id } = useParams();
    const project = userData.projects.find(p => p.id === id);

    if (!project) return <div className="p-10 text-slate-200">Project not found</div>;

    return (
        <div className="min-h-screen bg-slate-900 px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
            <div className="mx-auto max-w-4xl lg:py-24">
                <Link to="/" className="group mb-8 inline-flex items-center font-semibold leading-tight text-teal-300">
                    <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    Back to Portfolio
                </Link>

                <h1 className="text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl mb-6">
                    {project.title}
                </h1>

                <p className="mb-10 text-lg leading-relaxed text-slate-400">
                    {project.description}
                </p>

                <div className="space-y-8">
                    <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-8 text-center h-64 flex flex-col items-center justify-center">
                        <span className="text-slate-500 mb-2">[Screenshot Placeholder - Main Dashboard]</span>
                        <span className="text-xs text-slate-600">The user will add screenshots here later.</span>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2">
                        <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-8 text-center h-48 flex items-center justify-center">
                            <span className="text-slate-500">[Screenshot Placeholder - Feature A]</span>
                        </div>
                        <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-8 text-center h-48 flex items-center justify-center">
                            <span className="text-slate-500">[Screenshot Placeholder - Feature B]</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
