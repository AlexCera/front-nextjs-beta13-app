"use client"
import { useTech } from "@/context/TechContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Page({ params }) {

    const [tech, setTech] = useState({
        name: "",
        siteUrl: ""
    });
    const { techs, createTech, updateTech } = useTech();
    const router = useRouter();

    const handleChange = (e) => {
        setTech({ ...tech, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (params.id) {
            /* update */
            updateTech(params.id, tech)
        } else {
            /* create */
            createTech(tech.name, tech.siteUrl)
        }
        router.push("/")
    }

    useEffect(() => {
        if (params.id) {
            const techFound = techs.find(tech => tech.id === params.id)
            console.log("--", techFound);
            if (techFound) setTech({
                name: techFound.name,
                siteUrl: techFound.siteUrl
            })
        }
    }, [])

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" placeholder="Write your favorite technology"
                onChange={handleChange} value={tech.name} />
            <textarea name="siteUrl" placeholder="Share the official page with us"
                onChange={handleChange} value={tech.siteUrl} />
            <button>Save</button>
        </form>
    )
}  