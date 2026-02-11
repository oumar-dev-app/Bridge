
import Container from './Container';
import Image from 'next/image';

function Confiance() {
    return (
        <div className='bg-gray-500 mb-10 p-5'>
            <Container>
                <h1 className='text-2xl font-semibold text-center text-white mb-8'>Il nous fait confiance !</h1>
                <div className='py-6   grid grid-cols-1 gap-10 m-5 md:grid-cols-2  lg:grid-cols-3'>
                    <div className='space-y-3 text-white flex m-auto flex-col justify-center'>
                        <Image
                            src={"/Manda-SISSOKO.jpeg"}
                            alt='Manda'
                            width={200}
                            height={200}
                            priority className='rounded-full' />

                        <p className='text-sm font-semibold'>Manda SISSOKO</p>
                    </div>
                    <div className='space-y-3 text-white flex m-auto flex-col justify-center'>
                        <Image
                            src={"/Moussa-Balla-COULIBALY.jpeg"}
                            alt='Moussa'
                            width={200}
                            height={200}
                            priority className='rounded-full'/>

                        <p className='text-sm font-semibold'>Moussa Balla COULIBALY</p>
                    </div>
                    <div className='space-y-3 text-white flex m-auto flex-col justify-center'>
                        <Image
                            src={"/Mr-YATARA.jpeg"}
                            alt='yattara'
                            width={200}
                            height={200}
                            priority className='rounded-full' />

                        <p className='text-sm ml-8 font-semibold'>Mr.YATARA</p>
                    </div>
                 

                </div>
            </Container>
        </div>
    )
}

export default Confiance;