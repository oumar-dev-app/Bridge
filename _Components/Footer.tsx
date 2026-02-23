import Container from './Container';
import FooterTop from './FooterTop';
import FooterLink from './FooterLink';
import Message from './Message';
import LogoFooter from './LogoFooter';
import AdminBtn from './AdminBtn';
import IconsFooter from './IconsFooter';
import LoginBtnFooter from './LoginBtnFooter';
import AdressMap from './AdressMap';
import WhatsappBtn from './WhatsappBtn';



const Footer = () => {
  return (
    <footer className='bg-blue-950 text-white'>
  
        {/* Les reseaux sociaus */}
        <div>
          <IconsFooter />
        </div>
    
      <Container>
        <div className='py-6  grid grid-cols-1 gap-2 m-5 md:grid-cols-2  lg:grid-cols-4'>
          {/* Lien et inscript et partie admin */}
          <div className=' py-3 '>
            <h1 className='font-semibold py-3'>Liens rapide</h1>
            <FooterLink />
            <div className='py-3'>
              <LoginBtnFooter />
              <AdminBtn />
              <WhatsappBtn />
            </div>
          </div>
          <div className='py-3'>
            <FooterTop />
          </div>
          <div className='flex w-full justify-center py-3'>
            <Message />
          </div>
          {/* La localisation */}
          <div className='py-3 ml-10'>
            <AdressMap />
          </div>
        </div>
      </Container>
      <Container>
        {/* Signe par: */}
        <div className='border-t mt-2 border-white/20'>
          <LogoFooter />
          <p className='text-center text-sm font-semibold'>Copyright©2026 by Bridge</p>
        </div>
      </Container>
    </footer >
  )
}

export default Footer;