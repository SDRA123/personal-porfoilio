import React, { useState, useEffect } from 'react';
import LeftSidebar from './LeftSidebar';
import RightContent from './RightContent';

const Layout = () => {
    // Mouse tracker for spotlight effect
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="relative min-h-screen bg-slate-900 text-slate-400 font-sans selection:bg-teal-300 selection:text-teal-900">
            {/* Spotlight Effect */}
            <div
                className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
                style={{
                    background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`
                }}
            />

            <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
                <div className="lg:flex lg:justify-between lg:gap-4">
                    <LeftSidebar />
                    <RightContent />
                </div>
            </div>
        </div>
    );
};

export default Layout;
