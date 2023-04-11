"use client"
import { createContext, useContext } from "react";

const TechContext = createContext([]);

export const userTech = () => {
    const context = useContext(TechContext)
    if (!context) throw new Error("useTech must be used within a provider")
    return context
}

export const TechProvider = ({ children }) => {
    const techs = [];

    return (
        <TechContext.Provider value={{ techs }}>
            {children}
        </TechContext.Provider>
    )
}