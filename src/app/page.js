"use client"

import TechCard from "@/components/TechCard";
import { userTech } from "@/context/TechContext"

export default function Page() {

    const { techs } = userTech();
    console.log(techs);
    return (
        <div>
            {
                techs.map((tech) => (
                    <TechCard key={tech.id} tech={tech} />
                ))
            }
        </div>
    )
}
