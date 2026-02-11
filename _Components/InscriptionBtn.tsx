import Link from 'next/link';


const InscriptionBtn = () => {
  return (
    <Link href={"/inscription"} className=''>
      <button className='text-sm font-semibold border-2 border-blue-800  hover:text-blue-700 group p-2 rounded-full  text-black  cursor-pointer hoverEffect'>
        S'inscrire
      </button>
    </Link>

  )
}

export default InscriptionBtn;