import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { Button } from "@/components/ui/moving-border";


function HeroSection() {
    return (
        <div className='h-auto md:h-[40rem] w-full flex flex-col  items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 '>
            <div className="p-4 relative z-10 w-full text-center">

                <h1 className="mt-30 md:mt-0 text-4xl md:text-7xl text-start md:text-center font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"> Master the Art of Music</h1>
                <Spotlight
                    className="-top-40 left-0 md:-top-20 md:left-60"
                    fill="white"
                />
                <p className="mt-4 font-normal text-start md:text-center text-base md:text-lg text-neutral-300 max-w-lg mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quia perspiciatis, accusantium doloribus corporis nobis repellendus vitae dolore ratione perferendis.</p>
                <div className="mt-4 flex md:items-center md:justify-center">
                    <Link href={"/courses"}>
                        <Button>
                            Explore Courses
                        </Button>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default HeroSection