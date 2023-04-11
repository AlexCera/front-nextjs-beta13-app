"use client"
import { createContext, useContext } from "react";

const TechContext = createContext([]);

export const userTech = () => {
    const context = useContext(TechContext)
    if (!context) throw new Error("useTech must be used within a provider")
    return context
}

export const TechProvider = ({ children }) => {
    const techs = [
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
    ];

    return (
        <TechContext.Provider value={{ techs }}>
            {children}
        </TechContext.Provider>
    )
}