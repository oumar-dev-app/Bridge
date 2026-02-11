import Container from "@/_Components/Container";
import LoginAdmin from "@/_Components/LoginAdmin";
import LogoAdmin from "@/_Components/LogoAdmin";

export default function LoginPage() {
    return (
        <Container>
            <div className="bg-blue-950 grid rounded-lg grid-cols-1 p-10 m-5 md:grid-cols-2 lg:grid-cols-2">
                <div className="m-auto">
                  <LogoAdmin/>
                </div>
                <div className="m-5">
                    <LoginAdmin />
                </div>

            </div>
        </Container>

    )
}