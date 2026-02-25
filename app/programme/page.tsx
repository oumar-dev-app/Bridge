import Container from "@/_Components/Container"

export default function NosProgramme() {
    return (
        <Container>
            <div className="m-4 bg-blue-950 p-10 mb-10 rounded-lg space-y-6 text-white">
                <div className="space-y-4 border border-white/25 rounded-xl p-2">
                    <h1 className="text-2xl font-bold text-center">COURS EN GROUPE</h1>
                    <h3 className="font-bold text-center">Jours</h3>
                    <p className="text-center">Lundi - Mardi - Vendredi</p>
                    <h3 className="font-bold text-center">Heures</h3>
                    <p className="text-center">10H - 12H ou 17H - 19H</p>
                    <h3 className="font-bold text-center">Frais</h3>
                    <p className="text-center">70.000 FCFA / niveau</p>
                    <h3 className="font-bold text-center">Inscription</h3>
                    <p className="text-center">5000 FCFA</p>
                </div>
                <div className="space-y-4 border border-white/25 rounded-xl p-2">
                    <h1 className="text-2xl font-bold text-center">COURS INDIVIDUEL</h1>
                    <h3 className="font-bold text-center">Jours</h3>
                    <p className="text-center">Du Lundi au Vendredi</p>
                    <h3 className="font-bold text-center">Heures</h3>
                    <p className="text-center">(Flexibles)</p>
                    <h3 className="font-bold text-center">Frais</h3>
                    <p className="text-center">70.000 FCFA / mois</p>
                    <h3 className="font-bold text-center">Inscription</h3>
                    <p className="text-center">5000 FCFA</p>
                </div>
                <div className="space-y-4 border border-white/25 rounded-xl p-2">
                    <h1 className="text-2xl font-bold text-center">COURS EN LIGNE</h1>
                    <h3 className="font-bold text-center">Jours</h3>
                    <p className="text-center">Du Lundi au Vendredi</p>
                    <h3 className="font-bold text-center">Heures</h3>
                    <p className="text-center">(Flexibles)</p>
                    <h3 className="font-bold text-center">Frais</h3>
                    <p className="text-center">25.000 FCFA / mois</p>
                    <h3 className="font-bold text-center">Inscription</h3>
                    <p className="text-center">5000 FCFA</p>
                </div>
            </div >
        </Container>
    )
}