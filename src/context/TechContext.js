"use client"
import { createContext, useContext, useState } from "react";
import { v4 as uuid } from "uuid";

const TechContext = createContext([]);

export const useTech = () => {
    const context = useContext(TechContext)
    if (!context) throw new Error("useTech must be used within a provider")
    return context
}

export const TechProvider = ({ children }) => {
    const [techs, setTechs] = useState([
        {
            id: uuid(),
            name: "NextJS",
            siteUrl: "https://nextjs.org/"
        },

    ])

    const createTech = (name, siteUrl) =>
        setTechs([
            ...techs,
            {
                name,
                siteUrl,
                id: uuid()
            },
        ])

    const deleteTech = (id) =>
        setTechs([...techs.filter((tech) => tech.id !== id)])

    const updateTech = (id, data) =>
        setTechs([...techs.map(tech => tech.id === id ? { ...tech, ...data } : tech)])

    return (
        <TechContext.Provider
            value={{
                techs,
                createTech,
                deleteTech,
                updateTech,
            }}>
            {children}
        </TechContext.Provider>
    )
}