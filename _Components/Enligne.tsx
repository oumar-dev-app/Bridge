import Container from "./Container";
import Image from "next/image";

function Enligne() {
  return (
    <div>
         <Container>
                <div className="space-y-20  bg-blue-950 ">
                    <div className="p-10 bg-white">
                        <div className='py-16 grid grid-cols-1 gap-8 md:grid-cols-2 m-5 lg:grid-cols-2 space-y-5'>
                            <div  className="flex flex-col justify-center ">
                                <div className="bg-blue-950 p-2 rounded-2xl w-50 mb-5">
                                    <p className="text-center text-white font-semibold">Cours en ligne</p>

                                </div>
                                <p className="">Chez bridge nous croyons que l'apprentissage de l'Anglais ne dévrait pas être limité par la distance ou les barrières géographiques. 
                                    Fort des années d’expériences, nous offrons des formations de haute qualité, accessibles et flexibles, conçues pour répondre à vos besoins spécifiques. 
                                    Que vous souhaitiez donner un coup d’accélérateur a votre carrière ou simplement voyager sans limites, 
                                    nous sommes là pour vous accompagner.</p>
                            </div>
                            <div>
                                <Image 
                                src={"/ouqueH.jpeg"} 
                                alt="enligne" 
                                width={450} 
                                height={450}
                                className="rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
    </div>
  )
}

export default Enligne;