import Carousel from "./Carousel";
import Container from "./Container";


const imgs = [
    {
        id: 1,
        name: "etudiant",
        dscr: "Un etudiant déja finit",
        src: "/presentiel.jpeg"
    },

    {
        id: 2,
        name: "etudiant",
        dscr: "Un etudiant déja finit",
        src: "/presentiel.jpeg"
    },
    {
        id: 3,
        name: "etudiant",
        dscr: "Un etudiant déja finit",
        src: "/presentiel.jpeg"
    },
    {
        id: 4,
        name: "etudiant",
        dscr: "Un etudiant déja finit",
        src: "/presentiel.jpeg"
    },
]



function Confiance() {
    return (
        <div className="bg-gray-400 p-5 ">
            <Container>
              <Carousel/>
            </Container>
        </div>


    )
}

export default Confiance;