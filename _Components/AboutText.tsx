import Container from "./Container";

export default function AboutText() {
    return(
        <>
         <div>
            <Container>
                <div className="grid grid-cols-2">
                    <div className="border border-blue-500 rounded-lg bg-white/20">
                        <h1 className="font-bold text-2xl">Qui sommes-nous ?</h1>
                        <p>Bridge est un cabinet de formation spécialisé dans les cours d'Anglais en ligne. 
                            Notre but est de rendre le monde plus petit en servant de pont entre les individus, les cultures. 
                            En plus des cours en ligne, nous offrons des cours présentiels. 
                            Nous utilisons des méthodes simples et pratiques.</p>
                    </div>

                    <div className="border border-blue-500 rounded-lg bg-white/20">
                        <h1 className="font-bold text-2xl">Où sommes-nous ?</h1>
                        <p>Kalaban Coura ACI en face de la pharmacie Djouma Barry, Bamako <br />
                            Contact : 223 78 90 23 89</p>
                    </div>
                </div>
            </Container>
         </div>
        </>
    )
};

