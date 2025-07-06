"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Links, Name, Title } from "@/lib/constants/config";
import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

export function HeroSection() {
    // const router = useRouter();
    const scrollToNext = () => {
        const element = document.querySelector("#about");
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden">
            {/* Background Animation */}
            <div className="absolute inset-0 -z-10">
                <div className="bg-primary/10 absolute top-20 left-10 h-72 w-72 animate-pulse rounded-full blur-3xl" />
                <div className="bg-accent/10 absolute right-10 bottom-20 h-96 w-96 animate-pulse rounded-full blur-3xl delay-1000" />
            </div>

            <div className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center space-y-8 text-center">
                    {/* Profile Photo */}
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="from-primary to-accent absolute inset-0 animate-pulse rounded-full bg-gradient-to-r opacity-75 blur" />
                        <Avatar className="ring-primary/20 relative z-10 h-32 w-32 ring-4 sm:h-40 sm:w-40">
                            <AvatarImage src="/profile.JPG" alt="Profile" className="object-cover" />
                            <AvatarFallback className="bg-primary/10 text-primary text-2xl font-bold sm:text-3xl">
                                JT
                            </AvatarFallback>
                        </Avatar>
                    </motion.div>

                    {/* Name and Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="space-y-4"
                    >
                        <h1 className="text-foreground text-4xl font-bold sm:text-5xl lg:text-6xl">
                            <span className="from-primary to-accent bg-gradient-to-r bg-clip-text text-transparent">
                                {Name}
                            </span>
                        </h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="text-muted-foreground max-w-2xl text-xl sm:text-2xl"
                        >
                            {Title}
                        </motion.p>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="text-muted-foreground max-w-3xl text-lg leading-relaxed"
                    >
                        I craft digital experiences that blend beautiful design with robust functionality. Passionate
                        about creating applications that make a difference in people&apos;s lives.
                    </motion.p>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.0 }}
                        className="flex items-center space-x-4"
                    >
                        <Button variant="outline" size="icon" className="rounded-full">
                            <a href={Links.Github} target="_blank">
                                <Github size={20} />
                            </a>
                        </Button>
                        <Button variant="outline" size="icon" className="rounded-full">
                            <a href={Links.LinkedIn} target="_blank">
                                <Linkedin size={20} />
                            </a>
                        </Button>
                        <Button variant="outline" size="icon" className="rounded-full">
                            <a href={`mailto:${Links.Email}`}>
                                <Mail size={20} />
                            </a>
                        </Button>
                    </motion.div>

                    {/* CTA Buttons */}
                    {/* <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                        className="flex flex-col gap-4 pt-4 sm:flex-row"
                    >
                        <Button size="lg" className="rounded-full px-8">
                            View My Work
                        </Button>
                        <Button variant="outline" size="lg" className="rounded-full px-8">
                            Get In Touch
                        </Button>
                    </motion.div> */}
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 transform"
            >
                <button
                    onClick={scrollToNext}
                    className="text-muted-foreground hover:text-primary flex flex-col items-center space-y-2 transition-colors"
                >
                    <span className="text-sm">Scroll to explore</span>
                    <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                        <ChevronDown size={24} />
                    </motion.div>
                </button>
            </motion.div>
        </section>
    );
}
