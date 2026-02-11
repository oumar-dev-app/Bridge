import Container from "./Container"
import Image from "next/image";

function Presentiel() {
  return (
        <div className=" bg-blue-950 p-10">
                <Container>
                    <div className='py-12 grid grid-cols-1 md:grid-cols-2 m-5 lg:grid-cols-2 space-y-4'>
                        <div className="w-full">
                            <Image 
                            src="/presentiel.jpeg" 
                            alt="" width={500} 
                            height={500} 
                            className="rounded-lg"
                             
                            />
                        </div>
                        <div  className="flex flex-col justify-center ">
                            <div className="bg-gray-400 p-2 rounded-2xl w-50 mb-5">
                                <p className="text-center text-white font-semibold ">Cours présentiel</p>

                            </div>
                           <p className="text-white">En plus de nos cours en ligne, nous proposons également des formations à présentiel et à domicile pour ceux qui préfère
                            un apprentissage plus traditionnel. Nos formateurs se déplacent chez vous ou vous accueillent dans nos centres
                            de formation, offrant ainsi une expérience d'apprentissage immersive et adaptée à vos besoins spécifiques.
                            Que ce soit pour des cours individuels ou en groupe, nous nous adaptons à votre emploi du temps et à vos préférence.
                           </p>
                        </div>
                    </div>
                </Container>
            </div>
  )
}

export default Presentiel;