"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
    const router = useRouter();

    return (
        <header>
            <Link href={"/"}>
                <h2>Home</h2>
            </Link>

            <div>
                <button onClick={() => router.push("/new")}>
                    Add your favorite tech
                </button>
            </div>
        </header>
    )
}
