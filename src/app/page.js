"use client"

import TechCard from "@/components/TechCard";
import { useTech } from "@/context/TechContext"

export default function Page() {

    const { techs } = useTech();
    console.log(techs);
    return (
        <div className="flex justify-center">
            {
                (techs.length > 0)
                    ?
                    <div className="w-7/12">
                        {
                            techs.map((tech) => (
                                <TechCard key={tech.id} tech={tech} />
                            ))
                        }
                    </div>
                    :
                    <main>
                        <p className="text-red-700 text-2xl text-center">No technologies have been registered yet</p>
                    </main>
            }
        </div>
    )
}
