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
            id: 1,
            name: "Rust",
            siteUrl: "https://www.rust-lang.org/es"
        },
        {
            id: 2,
            name: "Python",
            siteUrl: "https://www.python.org/"
        },
        {
            id: 3,
            name: "TypeScript",
            siteUrl: "https://www.typescriptlang.org/"
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

    return (
        <TechContext.Provider 
            value={{ 
                techs,
                createTech
            }}>
            {children}
        </TechContext.Provider>
    )
}