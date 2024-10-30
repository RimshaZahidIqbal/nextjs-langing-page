"use client"

import courseData from "@/data/music-data.json"
import Link from 'next/link';
import Image from "next/image";
import { Button } from "./ui/moving-border";
import { p } from "framer-motion/client";
import { BackgroundGradient } from './ui/background-gradient';

interface Course {
    title: string,
    artist: string,
    artwork: string,
    url: string,
    id: number,
    isFeatured: boolean
}


function FeaturedCourses() {
    const featuredCourses = courseData.filter((course: Course) => course.isFeatured)
    return (
        <div>
            <div className="py-12 bg-gray-900">
                <div className="text-center">
                    <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Featured Courses </h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl"> Learn With the Best </p>
                </div>
                <div className="mt-10 ">
                    <div className="grid grid-cols-1 sm:grid-col-2 lg:grid-cols-3 gap-8 justify-center">
                        {/* courses grid  */}

                        {featuredCourses.map((course: Course) => (
                            <div key={course.id} className="flex justify-center text-center">
                                <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">

                                    <Image
                                        src={course.artwork}
                                        alt={course.title}
                                        height="400"
                                        width="400"
                                        className="object-contain"
                                    />
                                    <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                                        {course.title}
                                    </p>

                                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                        {course.url} </p>
                                    <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                                        <span>Play Now</span>
                                    </button>
                                </BackgroundGradient>
                            </div>
                        ))}
                    </div>
                </div>

                <div className=" mt-20 text-center">
                    <Link href={"/courses"}>
                        <button type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-l font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Explore all Courses</button>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default FeaturedCourses
