"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const navItems = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Tech Stack", href: "#tech-stack" },
        { name: "Projects", href: "#projects" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
        setIsOpen(false);
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
                scrolled ? "bg-background/80 border-border border-b backdrop-blur-md" : "bg-transparent"
            }`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="flex-shrink-0"
                    >
                        <button
                            onClick={() => scrollToSection("#home")}
                            className="text-foreground hover:text-primary text-xl font-bold transition-colors"
                        >
                            Portfolio
                        </button>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="flex items-center space-x-8"
                        >
                            {navItems.map((item, index) => (
                                <motion.button
                                    key={item.name}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * index }}
                                    onClick={() => scrollToSection(item.href)}
                                    className="text-foreground hover:text-primary group relative transition-colors duration-200"
                                >
                                    {item.name}
                                    <span className="bg-primary absolute -bottom-1 left-0 h-0.5 w-0 transition-all duration-200 group-hover:w-full" />
                                </motion.button>
                            ))}
                        </motion.div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-foreground"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-background/95 border-border border-b backdrop-blur-md md:hidden"
                >
                    <div className="space-y-1 px-4 py-2">
                        {navItems.map((item, index) => (
                            <motion.button
                                key={item.name}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 * index }}
                                onClick={() => scrollToSection(item.href)}
                                className="text-foreground hover:text-primary block w-full px-3 py-2 text-left transition-colors duration-200"
                            >
                                {item.name}
                            </motion.button>
                        ))}
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
}
