import Container from './Container';
import FooterTop from './FooterTop';
import FooterLink from './FooterLink';
import Message from './message';
import LogoFooter from './LogoFooter';
import AdminBtn from './AdminBtn';
import IconsFooter from './IconsFooter';
import LoginBtnFooter from './LoginBtnFooter';
import AdressMap from './AdressMap';
import WhatsappBtn from './WhatsappBtn';



const Footer = () => {
  return (
    <footer className='bg-blue-950 text-white'>
      <Container>
        <div>
          <IconsFooter />
        </div>
      </Container>
      <Container>
        <div className='py-6  grid grid-cols-1 gap-2 m-5 md:grid-cols-2  lg:grid-cols-4'>
          <div className='lg:space-y-8'>
            <h1 className=' font-semibold'>Liens rapide</h1>
            <FooterLink />
            <LoginBtnFooter />
            <AdminBtn />
          </div>
          <div>
            <FooterTop />
            
          </div>
          <div className='flex w-full justify-center'>
            <Message />
          </div>
          <div >
            <AdressMap/>
          </div>
        </div>
      </Container>
      <Container>
        <div className='border-t mt-2 border-white/20'>
          <LogoFooter />
          <p className='text-center text-sm font-semibold'>Copyright©2026 by Bridge  2026</p>
        </div>
      </Container>
    </footer >
  )
}

export default Footer;