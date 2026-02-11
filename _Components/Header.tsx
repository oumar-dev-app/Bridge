import Container from "./Container";
import LoginBtn from "./InscriptionBtn";
import Logo from "./Logo";
import Mobilemenu from "./Mobilemenu";
import Navbar from "./Navbar";



function Header() {
  return (
    <header>
      <Container>
        <div className="p-4"> 
           <div className="flex items-center justify-between ">
            <div className="w-auto md:w-1/3 flex items-center gap-2.5 justify-start md:gap-0">
              <Mobilemenu />
              <Logo />
            </div>
            <div className="flex justify-between  items-center gap-10">
              <Navbar />
              <LoginBtn />
            </div>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header;

