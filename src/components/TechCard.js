import { useRouter } from "next/navigation";

export default function TechCard({ tech }) {
    const router = useRouter();

    return (
        <div
            style={{
                borderRadius: "20px",
                background: "#6c8685",
                color: "white",
                padding: ".5rem 1rem",
                marginBottom: ".5rem"
            }}
            onClick={() => router.push(`/edit/${tech.id}`)}
        >
            <h2>{tech.name}</h2>
            <p>Conoce más: <a target="_blank" href={tech.siteUrl}>Sitio oficial</a></p>

            <button>Delete</button>
        </div>
    )
}
