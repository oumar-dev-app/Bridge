import { Mail, MapPin, Phone } from 'lucide-react';
import React from 'react';


interface ContactItem {
    title: string;
    subtitle: string;
    icon: React.ReactNode;
}

const data: ContactItem[] = [
    {
        title: "Bamako",
        subtitle: "Kalaban-Coura ACI",
        icon: (<MapPin size={30} className='text-white/20' />)
    },
    {
        title: "Appelez-nous",
        subtitle: "+223-78-90-23-89",
        icon: (<Phone size={30} className='text-white/20' />)
    },
    {
        title: "Notre adresse email",
        subtitle: "bridgemali2024@gmail.com",
        icon: (<Mail size={30} className='text-white/20' />)
    },
]

function FooterTop() {
    return (
        <div>
            <h1 className=' font-semibold py-3'>Contacts</h1>
            {data?.map((items, index) => {
                return (
                    <div key={index} className='flex items-center gap-3 group hover:bg-gray-700 p-4 rounded-lg'>
                        {items?.icon}
                        <div className='space-y-2'>
                            <h3 className='font-semibold text-sm'>{items?.title}</h3>
                            <p className='text-sm'>{items?.subtitle}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default FooterTop;