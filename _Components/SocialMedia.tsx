import { YoutubeIcon } from 'lucide-react';
import { ImFacebook, ImLinkedin2 } from 'react-icons/im';
import { SiTiktok } from 'react-icons/si';
import Container from './Container';
import Link from 'next/link';


const data = [
    {
        id: 1,
        title: "facebook",
        icon: (<ImFacebook size={30} className=' text-white'/>),
        href: "https://www.facebook.com/share/15ayE3hRzg/?mibextid=qi20mg"

    },
    {
        id: 2,
        title: "tiktok",
        icon: (<SiTiktok size={30} className=' text-white'/>),
        href: "https://www.tiktok.com/@bridge.mali"
    },
    {
        id: 3,
        title: "youtube",
        icon: (<YoutubeIcon size={30} className=' text-white'/>),
        href: "https://www.youtube.com/@Bridge_Mali"
    },
    {
        id: 4,
        title: "linkdin",
        icon: (<ImLinkedin2 size={30} className=' text-white'/>),
        href: "https://www.linkedin.com/company/106969544/admin/page-posts/published/"
    },
]

function IconsFooter() {
    return (
        <div className='w-7xl '>

            <div className='py-6  grid grid-cols-1 gap-2 m-5 md:grid-cols-2  lg:grid-cols-4'>
                {data.map((icons) => {
                    return (
                        <div key={icons.id} className='border border-white/20 cursor-pointer  w-60 p-2 rounded-lg shadow-lg'>
                            <Link href={icons.href}
                                className='flex gap-2 items-center justify-center  hoverEffect'
                            >
                                <button>
                                    {icons.icon}
                                </button>

                                <p className='text-sm font-semibold text-white'>{icons.title}</p>
                            </Link>
                        </div>
                    )
                })}
            </div>


        </div>
    )
}

export default IconsFooter