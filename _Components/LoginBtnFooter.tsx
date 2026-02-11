import Link from 'next/link';


const LoginBtnFooter = () => {
  return (
    <Link href={"/inscription"}>
      <button className="bg-blue-800 border border-white/20 text-white text-sm font-semibold py-2 px-6 rounded-lg cursor-pointer hoverEffet  hover:bg-blue-700 transition">
        S'inscrire
      </button>
    </Link>

  )
}

export default LoginBtnFooter;