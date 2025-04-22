"use client"
import courseData from "@/data/music_courses.json"
import Link from "next/link"
import { BackgroundGradient } from "./ui/background-gradient"

interface Course {
    id: number
    title: string
    slug: string
    description: string
    price: number
    instructor: string
    isFeatured: boolean
}

function FeaturedCourses() {
    const featuredCourses = courseData.courses.filter((course: Course) => course.isFeatured)

    return (
        <div className="py-12 px-5 md:px-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="text-start md:text-center">
                    <h2 className="text-sm font-semibold tracking-wide uppercase text-cyan-400">Featured Courses</h2>
                    <p className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Learn With the Best</p>
                </div>

                {/* Cards */}
                <div className="my-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                        {featuredCourses.map((course: Course) => (
                            <div key={course.id} className="flex justify-center">
                                <BackgroundGradient className="flex flex-col rounded-[22px] bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition overflow-hidden h-60 max-w-sm shadow-md hover:shadow-xl">
                                    <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                        <p className="text-lg sm:text-xl text-white mt-4 mb-2">{course.title}</p>
                                        <p className="text-sm text-slate-300 flex-grow">{course.description}</p>
                                        <Link
                                            href={`/courses/${course.slug}`}
                                            className="mt-4 text-cyan-300 hover:text-cyan-200 font-medium underline"
                                        >
                                            Learn More
                                        </Link>
                                    </div>
                                </BackgroundGradient>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Button */}
                <div className="text-start md:text-center py-10 flex items-center justify-center">
                    <Link
                        href="/courses"
                        className="px-6 py-3 rounded-full border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-slate-900 transition duration-200 font-medium"
                    >
                        View All Courses
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default FeaturedCourses
