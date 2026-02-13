import React from 'react'
import { SiWhatsapp } from 'react-icons/si'

function WhatsappBtn() {
    return (
        <div className='text-sm font-bold border-2 max-auto border-green-500 
        rounded-lg p-2 w-50 hover:bg-green-200 hoverEffect shadow-2xl '
        >
            <button className='flex items-center text-sm gap-3 cursor-pointer'>
                <SiWhatsapp size={30} className='text-green-500' /> Contactez-nous
            </button>

        </div>
    )
}

export default WhatsappBtn