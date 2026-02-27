'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Container from './Container';

const Images = [
    {
        id: 1,
        ImageSrc: '/bg.jpeg',
        title: '',
        desc: `Former est un art`,
    },
    {
        id: 2,
        ImageSrc: '/aboutImg2.jpeg',
        title: '',
        desc: `Chez Bridge anticipez le futur`,
    },
];

function AboutSlider() {
    const router = useRouter();
    const [currentIndex, setCurrentIndex] = useState(0);

    // Défilement automatique
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) =>
                prev === Images.length - 1 ? 0 : prev + 1
            );
        }, 5500); // 5 secondes

        return () => clearInterval(interval);
    }, []);

    return (
        <Container>
            <div className="w-full h-130 rounded-t-lg no-scroll overflow-hidden  relative">
                {/* SLIDER */}
                <div
                    className="flex h-full transition-transform duration-800 ease-in-out"
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                    }}
                >
                    {Images.map((item, index) => (
                        <div
                            key={item.id}
                            className="w-full transition-tranform rounded-t-lg duration-700 h-200 relative no-scroll bg-center bg-cover  rounded-lg shrink-0"
                            style={{ backgroundImage: `url(${item.ImageSrc})` }}
                        >
                            {/* Overlay */}
                            <div className="w-full h-full bg-black/40 absolute top-0 left-0 gb-gradient-to-b from-transparent to-black/90"></div>

                            {/* Contenu */}
                           { currentIndex ==index &&  <div className="absolute m-5 shadow-[0_0_40px_rgba(0,0,0,0,7)] w-110 space-y-5 bottom-90 slideUp">
                                <p className="text-white/95  w-76 text-3xl font-semibold space-x-1 text-md">
                                    {item.desc}
                                </p>
                            </div>
                            }
                            {/*  */}
                        </div>
                    ))}
                </div>

                {/* INDICATEURS */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
                    {Images.map((_, index) => (
                        <span
                            key={index}
                            className={`w-3 h-3 rounded-full cursor-pointer ${index === currentIndex ? 'bg-white' : 'bg-white/40'
                                }`}
                            onClick={() => setCurrentIndex(index)}
                        />
                    ))}
                </div>
            </div>
        </Container>
    );
}

export default AboutSlider;
