import Link from 'next/link';
import Image from 'next/image';

function LogoAdmin() {
    return (
        <div>
            <Link href={"/"}>
                <Image src={"/Logo2.png"}
                    alt='LogoFooter'
                    width={400}
                    height={400}
                    priority
                />
            </Link>
        </div>
    )
}

export default LogoAdmin;