'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Container from './Container';

const Images = [
    {
        id: 1,
        ImageSrc: '/enligne.png',
        title: 'Cours en  ligne',
        desc: `En ligne, nous offrons des formations de haute qualité, accessibles et flexibles, conçues pour répondre à vos besoins spécifiques.`,
    },
    {
        id: 2,
        ImageSrc: '/presentiel1.jpeg',
        title: 'Cours présentiel',
        desc: `Nos formateurs se déplacent chez vous ou vous accueillent dans nos centres de formation.`,
    },
    {
        id: 3,
        ImageSrc: '/slider1.jpeg',
        title: 'Où que vous soyez',
        desc: `Apprenez à votre rythme, où que vous soyez.`,
    },
];

function SliderImage() {
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
            <div className="w-full h-130 rounded-lg  overflow-hidden  relative">
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
                            className="w-full transition-tranform duration-700 h-200 relative bg-center bg-cover  rounded-lg shrink-0"
                            style={{ backgroundImage: `url(${item.ImageSrc})` }}
                        >
                            {/* Overlay */}
                            <div className="w-full h-full bg-black/40 absolute top-0 left-0 gb-gradient-to-b from-transparent to-black/90"></div>

                            {/* Contenu */}
                           { currentIndex ==index &&  <div className="absolute m-5 shadow-[0_0_40px_rgba(0,0,0,0,7)] w-110 space-y-5 bottom-90 slideUp">
                                <h2 className="text-5xl text-white font-extrabold uppercase">
                                    {item.title}
                                </h2>

                                <p className="text-white/95  w-76  space-x-1 text-md">
                                    {item.desc}
                                </p>

                                <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">

                                    <button
                                        onClick={() => router.push('/inscription')}
                                        className="bg-white border-2 border-white py-2 px-4 w-45 rounded-lg text-black hover:bg-gray-300 transition"
                                    >
                                        Je m’inscris
                                    </button>
                                </div>
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

export default SliderImage;
