'use client';
import Image from 'next/image';

const sliders = [
  { id: 1, 
    srcImage: '/Manda-SISSOKO.jpeg', 
    title: 'Etidiant1', 
    dscr: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo nobis tempore blanditiis iure consectetur laudantium! " },
  { id: 2, 
    srcImage: '/Moussa-Balla-COULIBALY.jpeg', 
    title: 'Etidiant2', 
    dscr: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo nobis tempore blanditiis iure consectetur laudantium! " },
  { id: 3, 
    srcImage: '/Mr-YATARA.jpeg', 
    title: 'Etidiant3', 
    dscr: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo nobis tempore blanditiis iure consectetur laudantium! " },
  { id: 4, 
    srcImage: '/Manda-SISSOKO.jpeg', 
    title: 'Etidiant4', 
    dscr: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo nobis tempore blanditiis iure consectetur laudantium! " },
]
export default function Carousel() {


  return (
    <div className=" w-full max-w-7xl mx-auto">
      <h1 className='text-center text-2xl font-semibold text-white'>Il nous fait confiance !</h1>
      <div className='overflow-hidden'>
        <div className='py-6  grid grid-cols-1 gap-6 m-5 md:grid-cols-2 lg:grid-cols-4'>
          {sliders.map((item) => {
            return(
              <div className='bg-white w-75 rounded-lg  shadow-lg  space-y-5'>
              <Image
              src={item.srcImage}
              alt='image'
              height={300}
              width={300}
              priority
              className=' rounded-t-lg '
              />
              <div className='space-y-5 m-2'>
                <h1 className='text-md font-bold'>{item.title}</h1>
                <p className='text-sm '>{item.dscr}</p>
              </div>
              </div>
            
            )
          })}
        </div>
      </div>
    </div>
  )
}
