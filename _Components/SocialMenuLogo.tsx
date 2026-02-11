
import Image from 'next/image'
import Link from 'next/link'


const SocialMenuLogo = () => {
  return (
    <div className='p-2'>
      <Link href={"/"}>
        <Image src={"/Logo2.png"}
          alt='LogoFooter'
          width={130}
          height={130}
          priority
        />
      </Link>

    </div>
  )
}

export default SocialMenuLogo;