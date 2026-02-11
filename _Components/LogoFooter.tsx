import Image from 'next/image'
import Link from 'next/link';

function LogoFooter() {
  return (
    <div className='p-2'>
      <Link href={"/"}>
        <Image src={"/Logo2.png"}
          alt='LogoFooter'
          width={130}
          height={130}
          priority

          className='m-auto'
        />

      </Link>

    </div>
  )
}

export default LogoFooter;