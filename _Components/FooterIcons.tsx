import { Facebook, Linkedin, Youtube } from 'lucide-react';


function FooterIcons() {
    return (
        <div className='space-y-5'>
            <h1 className='font-semibold'>Resesociaux</h1>
            <button>
                <Facebook className='w-5 h-5' />
            </button>
            <button>
                <Youtube className='w-5 h-5' />
            </button>
            <button>
                <Linkedin className='w-5 h-5' />
            </button>


        </div>
    )
}

export default FooterIcons