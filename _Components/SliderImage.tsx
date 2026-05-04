'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Container from './Container';

const Images = [
  {
    id: 1,
    ImageSrc: '/enligne.png',
    title: 'Cours en ligne',
    desc: `En ligne, nous offrons des formations de haute qualité, accessibles et flexibles, conçues pour répondre à vos besoins spécifiques.`,
  },
  {
    id: 2,
    ImageSrc: '/presentielSlide.jpeg',
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === Images.length - 1 ? 0 : prev + 1
      );
    }, 5500);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <div className="w-full h-125 overflow-hidden rounded-lg relative">

        {/* SLIDER */}
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {Images.map((item, index) => (
            <div
              key={item.id}
              className="w-full h-full relative bg-center bg-cover shrink-0"
              style={{ backgroundImage: `url(${item.ImageSrc})` }}
            >

              {/* Overlay */}
              <div className="w-full h-full bg-black/70 absolute top-0 left-0 bg-linear-to-b from-transparent to-black/60"></div>

              {/* Contenu */}
              {currentIndex === index && (
                <div className="absolute m-5 bottom-10 space-y-5 w-[50%]">

                  <h2 className="text-4xl text-white font-extrabold uppercase">
                    {item.title}
                  </h2>

                  <p className="text-white/95 text-md">
                    {item.desc}
                  </p>

                  <button
                    onClick={() => router.push('/inscription')}
                    className="bg-white py-2 px-4 rounded-lg text-black hover:bg-gray-300 transition"
                  >
                    Je m’inscris
                  </button>

                </div>
              )}
            </div>
          ))}
        </div>

        {/* INDICATEURS */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
          {Images.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                index === currentIndex ? 'bg-white' : 'bg-white/40'
              }`}
            />
          ))}
        </div>

      </div>
    </Container>
  );
}

export default SliderImage;