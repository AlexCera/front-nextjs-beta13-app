"use client"
import { useTech } from "@/context/TechContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

export default function Page({ params }) {

    const { techs, createTech, updateTech } = useTech();
    const router = useRouter();
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    const onSubmit = handleSubmit((data) => {
        if (params.id) {
            updateTech(params.id, data)
            toast.success("Your technology was successfully updated")
        } else {
            createTech(data.name, data.siteUrl)
            toast.success("Your technology was successfully added")
        }
        router.push("/")
    })

    useEffect(() => {
        if (params.id) {
            const techFound = techs.find(tech => tech.id === params.id)
            console.log("--", techFound);
            if (techFound) {
                setValue("name", techFound.name)
                setValue("siteUrl", techFound.siteUrl)
            }
        }
    }, [])

    return (
        <div className="flex justify-center items-center h-full">
            <form onSubmit={onSubmit} className="bg-gray-700 p-10 rounded w-9/12" autoComplete="off">
                <h2 className="text-green-200 mb-4 w-full ">Add your favorite tech here</h2>
                
                <input placeholder="Write your favorite technology"
                    {...register("name", { required: true })}
                    className="bg-gray-800 py-2 px-3 mb-2 block focus:outline-none w-full"/>
                {errors.name && (
                    <span className="block text-red-500 mb-2">This field is required</span>
                )}

                <textarea placeholder="Share the official page with us"
                    {...register("siteUrl", { required: true })} 
                    className="bg-gray-800 py-2 px-3 mb-2 block focus:outline-none w-full resize-none"/>
                {errors.siteUrl && (
                    <span className="block text-red-500 mb-2">This field is required</span>
                )}
                
                <button className="bg-green-500 hover:bg-green-600 px-6 py-1 rounded-sm disabled:opacity-30">Save</button>
            </form>
        </div>
    )
}