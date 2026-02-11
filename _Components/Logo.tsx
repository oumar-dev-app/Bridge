
import Image from 'next/image'
import Link from 'next/link'


const Logo = () => {
  return (
    <div className='p-2'>
      <Link href={"/"}>
        <Image src={"/logoHeaders.png"}
          alt='LogoFooter'
          width={130}
          height={130}
          priority
        />
      </Link>

    </div>
  )
}

export default Logo



