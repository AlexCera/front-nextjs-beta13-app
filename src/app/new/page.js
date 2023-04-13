"use client"
import { useTech } from "@/context/TechContext";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {

    const [tech, setTech] = useState();
    const { createTech } = useTech();
    const router = useRouter();

    const handleChange = (e) => {
        setTech({ ...tech, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        createTech(tech.name, tech.siteUrl)
        router.push("/")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" placeholder="Write your favorite technology"
                onChange={handleChange} />
            <textarea name="siteUrl" placeholder="Share the official page with us"
                onChange={handleChange} />
            <button>Save</button>
        </form>
    )
}  