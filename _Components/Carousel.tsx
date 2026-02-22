'use client';
import Image from 'next/image';


const sliders = [
  { id: 1, 
    srcImage: '/etudiant.jpeg', 
    title: 'Ababacar GAYE', 
    dscr: "Since 2024, the online classes with Bridge Mali  have greatly helped me improve my listening and speaking skills. Thanks to his effective teaching methods and professional guidance, I have gained confidence in my work environment where English plays a major role. Thank you for this high-quality training and continuous support. " },
  { id: 2, 
    srcImage: '/etudiant2.jpeg', 
    title: 'Makan COULIBALY', 
    dscr: "C'est avec plaisir que je partage mon expérience avec le centre de formation en anglais [BRIDGE MALI]. Grâce à leur programme de formation, j'ai pu améliorer sensiblement mes compétences linguistiques en anglais et renforcer ma confiance pour une communication efficace. " 
  }
  
]
export default function Carousel() {


  return (
    <div className=" w-full max-w-7xl mx-auto">
      <h1 className='text-center text-2xl font-semibold mb-8 text-white'>Ils nous ont fait confiance !</h1>
      <div className='overflow-hidden'>
        <div className='  grid grid-cols-1 gap-6 m-5 md:grid-cols-2 lg:grid-cols-4'>
          {sliders.map((item) => {
            return(
              <div key={item.id}
              className='bg-white  rounded-lg h-auto shadow-lg  space-y-2'>
              <Image
              src={item.srcImage}
              alt='image'
              height={300}
              width={350}
              priority
              className='rounded-t-lg'
              />
              <div className='space-y-3 m-3'>
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
