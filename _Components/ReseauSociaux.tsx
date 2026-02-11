import Container from './Container'
import { Facebook, Wheat, MailIcon } from 'lucide-react';

const ReseauSociaux = () => {
    return (
        <div className='bg-red-500 py-3'>
            <Container>
                <div className='flex gap-10 justify-between'>
                    <div className='flex gap-10'>
                        <Facebook className='' />
                        <Wheat />
                    </div>

                    <div className='flex gap-2'>
                        <MailIcon />
                        <p>bridgemail@gmail.com</p>
                    </div>
                </div>

            </Container>

        </div>
    )
}

export default ReseauSociaux;