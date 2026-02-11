import Image from 'next/image'
import Container from './Container'
import SliderImage from './SliderImage'



const HomeBanner = () => {
    return (

        <div className=''>
            <Container>
                <div className='shadow-[0_0_40px_rgba(0,0,0,0,7)] rounded-lg'>
                    <SliderImage />
                </div>
            </Container>
        </div>

    )
}

export default HomeBanner