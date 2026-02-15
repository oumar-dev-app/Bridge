import Container from "./Container";
import Link from "next/link";

const gb = [

    { ImgSrc: '/bg.jpeg', id: 1 }
];

export default function AboutText() {
    return (
        <Container>
            {gb.map((src) => {
                return (
                    <div key={src.id}
                        style={{ backgroundImage: `url(${src.ImgSrc})` }}
                        className="bg-center bg-cover "
                    >
                        <Container>
                            <div className="grid grid-cols-1 bg-white/80 gap-10 lg:grid-cols-1 absolue p-12">
                                <div className="flex justify-start mt-10 ">
                                    <div className=" p-6 space-y-5  text-white  shadow-2xl bg-blue-950 rounded-lg ">
                                        <h1 className="font-bold text-2xl">Qui sommes-nous ?</h1>
                                        <p>Bridge est un cabinet de formation spécialisé dans les cours d'Anglais en ligne. <br />
                                            Notre but est de rendre le monde plus petit en servant de pont entre les individus,  les cultures. <br />
                                            En plus des cours en ligne, nous offrons des cours présentiels. <br />
                                            Nous utilisons des méthodes simples et pratiques.</p>
                                    </div>
                                </div>

                                <div className="flex justify-end">
                                    <div className="p-6 shadow-2xl space-y-5 text-white  bg-blue-950 relative rounded-lg ">
                                        <h1 className="font-bold text-2xl">Où sommes-nous ?</h1>
                                        <p>Kalaban Coura ACI en face de la pharmacie Djouma Barry, Bamako <br />
                                            Contact : +223 78 90 23 89</p>
                                    </div>
                                </div>

                                <div className="flex justify-start mb-10">
                                    <div className=" p-6 space-y-8 text-white shadow-2xl bg-blue-950  rounded-lg ">
                                        <h1 className="font-bold text-2xl">Nos programmes</h1>
                                        <p className="space-y-8">
                                            <span className="rounded-2xl text-red-500 bg-red-500 w-3">.</span> Cours en groupe<br />
                                            <span className="rounded-2xl text-red-500 bg-red-500 w-3">.</span> Cours individuel<br />
                                            <span className="rounded-2xl text-red-500 bg-red-500 w-3">.</span> Cours en ligne<br />
                                        </p>

                                        <div className="flex justify-end">
                                            <Link href={"/programme"}
                                                className="border-2 border-white text-sm font-bold hover:bg-gray-200 hoverEffect bg-white text-black p-2 rounded-lg"
                                            >
                                                <button className="cursor-pointer">En savoir plus</button>
                                            </Link>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </div>
                );
            })}

        </Container>
    )
};

