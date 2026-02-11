import Link from 'next/link';

function AdminBtn() {
  return (
    <div>
      <Link href={"/login"}>
        <button
          className='bg-white text-black border border-white p-2 text-sm font-semibold hover:bg-gray-400   cursor-pointer rounded-lg mt-6'>
          Administration
        </button>
      </Link>
    </div>
  )
}

export default AdminBtn;