"use client"
import { useTech } from "@/context/TechContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function Page({ params }) {

    const { techs, createTech, updateTech } = useTech();
    const router = useRouter();
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    const onSubmit = handleSubmit((data) => {
        if (params.id) {
            updateTech(params.id, data)
        } else {
            createTech(data.name, data.siteUrl)
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
        <form onSubmit={onSubmit}>
            <input placeholder="Write your favorite technology"
                {...register("name", { required: true })} />
            {errors.name && (
                <span>This field is required</span>
            )}

            <textarea placeholder="Share the official page with us"
                {...register("siteUrl", { required: true })} />
            {errors.siteUrl && (
                <span>This field is required</span>
            )}
            <button>Save</button>
        </form>
    )
}