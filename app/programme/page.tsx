import Container from "@/_Components/Container"

export default function NosProgramme() {
    return (
        <div className="m-4 bg-blue-950 p-10 mb-10 rounded-lg ">
            <Container>
                <div className="flex  flex-col space-y-10 w-full mb-5 justify-center">
                    <table className=" border border-white/20 rounded-2xl">
                        <thead className="flex flex-col justify-center space-y-20 mb-8 text-white items-center">

                            <tr>
                                <th  className="text-3xl mb-2 font-semibold">Cours individuel</th>
                            </tr>
                            <tr>
                                <th  className=" mb-4 text-center text-md font-normal">Plus d’heures, plus de progrès… et moins d’excuses.</th>
                            </tr>
                        </thead>
                        <tbody className="border text-white">
                            <tr className="border border-white/20">
                                <td className="border border-white/20 p-2">Nombre d'heures/semaine</td>
                                <td className=" border border-white/20 p-2" >Prix</td>
                            </tr>
                            <tr className=" border border-white/20 ">
                                <td className=" border border-white/20 p-2">4 Heures + 1H en ligne</td>
                                <td className=" border border-white/20 p-2">35000 FCFA</td>
                            </tr>
                            <tr className=" border border-white/20 ">
                            <td className="border border-white/20 p-2">6 Heures + 2H en ligne</td>
                            <td className="border border-white/20 p-2">50.000 FCFA</td>
                        </tr>
                        <tr className=" border border-white/20 ">
                            <td className=" border border-white/20 p-2">8 Heures + 2H en ligne</td>
                            <td className=" border border-white/20 p-2">65.000 FCFA</td>

                        </tr>
                    </tbody>
                </table>
                <table className=" border border-white/20 rounded-2xl">
                    <thead className="flex flex-col justify-center space-y-20  mb-8 text-white items-center">

                        <tr>
                            <th  className="text-3xl  font-semibold">Cours en groupe</th>
                        </tr>
                        <tr>
                            <th  className="text-center mb-4 font-normal">À plusieurs, on comprend mieux… et on rigole un peu aussi.</th>
                        </tr>
                    </thead>
                    <tbody className="bborder border-white/20 text-white">
                        <tr className="border border-white/20 ">
                            <td className="border border-white/20 p-2">Nombre d'heures/semaine</td>
                            <td className="border border-white/20 p-2" >Prix</td>
                        </tr>
                        <tr className="border border-white/20 ">
                            <td className="border border-white/20 p-2">3 Heures</td>
                            <td className="border border-white/20 p-2">15.000 FCFA</td>
                        </tr>
                        <tr className="border border-white/20 ">
                            <td className="border border-white/20 p-2">4 Heures</td>
                            <td className="border border-white/20 p-2" >25.000 FCFA</td>
                        </tr>
                        <tr className=" border border-white/20 ">
                            <td className="border border-white/20 p-2">6 Heures</td>
                            <td className="border border-white/20 p-2">35.000 FCFA</td>

                        </tr>
                    </tbody>
                </table>
                <table className=" border border-white/20 rounded-2xl">
                    <thead className="flex flex-col justify-center space-y-20  mb-8 text-white items-center">

                        <tr>
                            <th  className="text-3xl ont-semibold">Cours à domicile</th>
                        </tr>
                         <tr>
                            <th  className="text-center mb-4 font-normal">Vous restez chez vous, on s’occupe du reste (même du savoir).</th>
                        </tr>
                    </thead>
                    <tbody className="border border-white/20 p-2  text-white">
                        <tr className=" border border-white/20 ">
                            <td className="border border-white/20 p-2">Nombre d'heures/semaine</td>
                            <td className="border border-white/20 p-2" >Prix</td>
                        </tr>
                        <tr className="border border-white/20 ">
                            <td className="border border-white/20 p-2">4 Heures </td>
                            <td className="border border-white/20 p-2" >65.000 FCFA</td>
                        </tr>
                        <tr className="border border-white/20 ">
                            <td className="border border-white/20 p-2">3 Heures + 1 Heure en ligne</td>
                            <td className="border border-white/20 p-2" >50.000 FCFA</td>
                        </tr>
                    </tbody>
                </table>
                <table className=" border border-white/20 rounded-2xl text-white">
                    
                    <thead className="flex flex-col justify-center space-y-20  mb-8 text-white items-center">
                        <tr>
                            <th className="text-3xl  font-semibold">Cours en ligne</th>
                        </tr>
                          <tr>
                            <th className="text-center mb-4 font-normal">La formation flexible qui s’adapte à votre emploi du temps.</th>
                        </tr>
                    </thead>
                    <tbody className="bborder border-white/20 p-2 text-white">
                        <tr className=" border border-white/20 ">
                            <td className="border border-white/20 p-2">Nombre d'heures/semaine</td>
                            <td className="border border-white/20">Prix</td>
                        </tr>
                        <tr className="border border-white/20 p-2">
                            <td className="border border-white/20 p-2">3 Heures</td>
                            <td className="border border-white/20 p-2">25.000 FCFA</td>
                        </tr>
                        <tr className=" border border-white/20 ">
                            <td className="border border-white/20 p-2">4 Heures</td>
                            <td className="border border-white/20 p-2" >30.000 FCFA</td>
                        </tr>
                        <tr className=" border border-white/20 ">
                            <td className="border border-white/20 p-2">5 Heures</td>
                            <td className="border border-white/20 p-2" >40.000 FCFA</td>

                        </tr>
                    </tbody>
                </table>
        </div>
            </Container >
        </div >
    )
}