"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
    const router = useRouter();

    return (
        <header className="flex justify-between items-center bg-gray-800 px-28 py-3">
            <Link href={"/"}>
                <h2 className="font-bold text-3xl text-green-400">Home</h2>
            </Link>

            <div>
                <button onClick={() => router.push("/new")}
                    className="bg-green-400 hover:bg-green-300 px-5 py-2 text-gray-100 
                    font-bold rounded inline-flex items-center">
                    Add your favorite tech
                </button>
            </div>
        </header>
    )
}
