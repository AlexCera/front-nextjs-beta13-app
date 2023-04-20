import { useTech } from "@/context/TechContext";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export default function TechCard({ tech }) {
    const router = useRouter();

    const { deleteTech } = useTech();

    return (
        <div
            className="bg-gray-500 hover:bg-slate-400 cursor-pointer px-20 py-5 m-2 flex flex-col items-center rounded-lg"
            onClick={() => router.push(`/edit/${tech.id}`)}
        >
            <div className="flex flex-col items-center">
                <h2 className="text-2xl"><q>{tech.name}</q></h2>
                <p className="text-gray-300">Conoce más: <a target="_blank" href={tech.siteUrl}>Sitio oficial</a></p>

            </div>
            <button onClick={(e) => {
                e.stopPropagation()
                const accept = window.confirm("Are you sure to eliminate this technology")
                if (accept) {
                    deleteTech(tech.id)
                    toast.success("Your technology was successfully removed.")
                }
            }} className="rounded-2xl bg-red-500 hover:bg-red-400 w-20 py-1 mt-4 ">Delete</button>
        </div>
    )
}
