"use client"
import React, { useEffect, useState } from 'react'

const Footer = () => {
    const [year, setYear] = useState(new Date().getFullYear());

    useEffect(() => {
        const updateYear = () => setYear(new Date().getFullYear());
        const interval = setInterval(updateYear, 1000 * 60 * 60);
        return () => clearInterval(interval);
    }, []);

    return (
        <footer className='w-full bg-slate-950 text-gray-300'>
            <div className='max-w-7xl mx-auto py-10 px-5 md:px-0'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10'>
                    {/* Logo Section */}
                    <div className='flex flex-col items-center md:items-start text-center md:text-left'>
                        <h1 className='text-2xl sm:text-3xl font-extrabold text-white mb-4'>LOGO</h1>
                        <p className='text-sm text-gray-400 max-w-xs'>
                            Building the future, one innovation at a time.
                        </p>
                    </div>

                    {/* Navigation Sections */}
                    {[
                        {
                            title: 'Company',
                            links: ['About', 'Press', 'Careers', 'Privacy policy', 'Brand assets & guidelines']
                        },
                        {
                            title: 'Resources',
                            links: ['Blog', 'Help Center', 'Documentation', 'Community', 'Support']
                        },
                        {
                            title: 'Connect',
                            links: ['Contact Us', 'Twitter', 'LinkedIn', 'GitHub', 'Newsletter']
                        }
                    ].map((section, index) => (
                        <div key={index} className='flex flex-col items-start md:text-left'>
                            <h2 className='text-lg font-semibold text-white mb-3'>{section.title}</h2>
                            <ul className='space-y-2'>
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a
                                            href='#'
                                            className='text-sm hover:text-white transition-colors duration-300'
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Divider */}
                <div className='border-t border-gray-700 py-8 mt-9'></div>

                {/* Copyright */}
                <div className='text-center'>
                    <p className='text-xs text-gray-400'>
                        © {year} Arun Acharya™. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer