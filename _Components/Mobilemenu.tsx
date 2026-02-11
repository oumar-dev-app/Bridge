'use client';
import { AlignLeft } from 'lucide-react';
import { useState } from 'react'
import SideMenu from './SideMenu';

function Mobilemenu() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    return (
        <div>
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className='bg-gray-400 rounded-lg md:hidden text-white '
                >
                <AlignLeft
                    className='hover:text-red-500 hoverEffect  m-2 md:hidden hover:cursor-pointer md:gap-0' />
            </button>
            <div className='md:hidden'>
                <SideMenu
                    isOpen={isSidebarOpen}
                    onClose={() => setIsSidebarOpen(false)}
                />
            </div>
        </div>
    )
}

export default Mobilemenu;