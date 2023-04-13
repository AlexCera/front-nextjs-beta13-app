"use client"

import TechCard from "@/components/TechCard";
import { useTech } from "@/context/TechContext"

export default function Page() {

    const { techs } = useTech();
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
