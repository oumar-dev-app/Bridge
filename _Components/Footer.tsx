import Container from './Container';
import FooterTop from './FooterTop';
import FooterLink from './FooterLink';
import Message from './Message';
import LogoFooter from './LogoFooter';
import IconsFooter from './IconsFooter';
import AdressMap from './AdressMap';
import WhatsappBtn from './WhatsappBtn';

const Footer = () => {
  return (
    <footer className='bg-blue-950 text-white'>

      {/* Réseaux sociaux */}
      <div>
        <IconsFooter />
      </div>

      <Container>
        <div className='py-6 grid grid-cols-1 gap-2 m-5 md:grid-cols-2 lg:grid-cols-4'>

          {/* Liens */}
          <div className='py-3'>
            <h1 className='font-semibold py-3'>Liens rapide</h1>
            <FooterLink />
            <div className='py-3'>
              <WhatsappBtn />
            </div>
          </div>

          {/* Partie top */}
          <div className='py-3'>
            <FooterTop />
          </div>

          {/* Message */}
          <div className='flex w-full justify-center py-3'>
            <Message />
          </div>

          {/* Localisation */}
          <div className='py-3 ml-10'>
            <AdressMap />
          </div>

        </div>
      </Container>

      <Container>
        {/* Footer bas */}
        <div className='border-t mt-2 border-white/20 text-center'>
          <LogoFooter />
          <p className='text-sm font-semibold'>
            Copyright©2026 by Bridge
          </p>
        </div>
      </Container>

    </footer>
  );
}

export default Footer;