import { url } from "inspector";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex justify-center items-center space-y-5 flex-col h-screen">
            <div>
                <h1 className="text-2xl font-bold">Error not found:</h1>
                <p className="font-semibold">La page que vous chercher n'est pas disponible</p>
            </div>

            <Link href="/">

                <button className="border cursor-pointer border-blue-800 bg-blue-800 p-2 text-white text-sm font-semibold rounded-lg">
                    Retourner
                </button>
            </Link>

        </div>
    )
}