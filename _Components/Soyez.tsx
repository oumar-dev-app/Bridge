import Container from "./Container"
import Image from "next/image";

function Soyez() {
    return (
        <div>
            <Container>
                <div className=" p-10 bg-white">
                    <div className='py-12 grid grid-cols-1 md:grid-cols-2 m-5 lg:grid-cols-2 space-y-4 gap-5'>
                        <div className="flex flex-col justify-center ">
                            <div className=" bg-blue-950 p-2 rounded-2xl w-50 mb-5">
                                <p className="text-center text-white font-semibold">Où que vous soyez</p>

                            </div>
                            <p>Bridge est un cabinet de formation Spécialialisés dans les cours d'Anglais en ligne. Avec des années d'expériences
                                dans l'enseignement de l'Anglais, nous avons développé des méthodes pédagogiques innovantes et efficaces.
                                Nos formateurs sont certifiés et possèdent une expertise reconnue dans leur domaine.
                            </p>
                        </div>

                        <div className="w-full">
                            <Image
                                src="/ouque1.jpeg"
                                alt="" width={500}
                                height={500}
                                className="rounded-lg"

                            />
                        </div>
                    </div>
                </div>
            </Container >
        </div>
    )
}

export default Soyez;