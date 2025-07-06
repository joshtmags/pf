"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Links } from "@/lib/constants/config";
import { motion } from "framer-motion";
import { Calendar, ExternalLink, Github, Users } from "lucide-react";
import Image from "next/image";

export function ProjectsSection() {
    const projects = [
        {
            id: 1,
            title: "Summit Formula - Learning Management System",
            description:
                "Summit Formula is a comprehensive Learning Management System (LMS) specifically designed for PAGCOR (Philippine Amusement and Gaming Corporation) training and certification programs. This is a sophisticated, enterprise-grade LMS specifically built for the Philippine gaming industry's training and certification needs.",
            image: "/lms.jpg",
            technologies: [
                "Laravel 10.8 (PHP 8.1+)",
                "React",
                "Inertia.js",
                "Spatie packages (Permissions, Activity Log)",
                "MySQL",
                "Redis",
                "Zustand State Management",
                "WebSocket & Broadcasting (Pusher and Laravel Echo)",
            ],
            liveUrl: "",
            githubUrl: "",
            category: "Web App",
            date: "2023",
            teamSize: "3 Developers",
            highlights: [
                "Course Management",
                "Assessment System",
                "Student Progress Tracking",
                "Feedback System",
                "PDF Generation: Certificates and reports",
                "Bulk Operations: Mass student management",
                "Document Management: Passport and signature uploads",
            ],
        },
        {
            id: 2,
            title: "Online Casino Gaming Platform Back Office",
            description:
                "A comprehensive back office management system for an online casino gaming platform. It's built with Laravel (backend) and React with Inertia.js (frontend) to manage all aspects of an online gambling operation. This is the administrative control center for PisoPlay, an online casino platform that allows players to bet on various games including slots, lottery, live casino, and sports betting.",
            image: "/lnc.png",
            technologies: [
                "Laravel/InertiaJS",
                "Material-UI",
                "PHP8",
                "MySQL",
                "Redis",
                "AWS S3",
                "WebSocket/Broadcasting",
            ],
            liveUrl: "",
            githubUrl: "",
            category: "Full Stack",
            date: "2025",
            teamSize: "5+ developers",
            highlights: [
                "Game Management",
                "Transaction Processing",
                "Betting & Payouts",
                "Reporting & Analytics",
                "Administrative Features: Content Management, Risk & Compliance, System Administration",
            ],
        },
        {
            id: 3,
            title: "Financial Transaction Management System",
            description:
                "A financial transaction management system designed to handle money transfers, deposits, withdrawals, and player account management for entertainment venue environment. This system essentially digitizes the cash management of a physical gaming venue, providing secure, traceable, and efficient handling of customer funds while maintaining strict security and compliance standards.",
            image: "",
            technologies: ["Laravel (PHP 8)", "InertiaJS", "Material-UI", "MySQL", "Redis"],
            liveUrl: "",
            githubUrl: "",
            category: "Web App",
            date: "2024",
            teamSize: "3+ developers",
            highlights: [
                "Financial Operations",
                "Account Management",
                "Administrative Features:Role-based permission, Transaction history and reporting, Real-time transaction monitoring",
            ],
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
            },
        },
    };

    const getInitials = (string: string) => {
        const words = string.split(" ");
        const initialsArray = words.map((word) => word.charAt(0).toUpperCase()); // Get first char and uppercase
        return initialsArray.join(""); // Join the characters into a string
    };

    return (
        <section id="projects" className="bg-muted/30 py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={containerVariants}
                    className="mx-auto max-w-7xl"
                >
                    {/* Section Header */}
                    <motion.div variants={itemVariants} className="mb-16 text-center">
                        <h2 className="text-foreground mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
                            Featured Projects
                        </h2>
                        <p className="text-muted-foreground mx-auto max-w-2xl text-xl">
                            A showcase of my recent work and contributions to the developer community
                        </p>
                    </motion.div>

                    {/* Projects Grid */}
                    <div className="grid gap-8 lg:grid-cols-2">
                        {projects.map((project) => (
                            <motion.div
                                key={project.id}
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                                className="group"
                            >
                                <Card className="group-hover:shadow-primary/10 h-full overflow-hidden transition-all duration-300 group-hover:shadow-xl">
                                    {/* Project Image */}
                                    <div className="bg-muted relative h-48 overflow-hidden">
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.3 }}
                                            className="from-primary/20 to-accent/20 flex h-full w-full items-center justify-center bg-gradient-to-br"
                                        >
                                            {project.image ? (
                                                <Image
                                                    src={project.image}
                                                    alt="cover photo"
                                                    width={800}
                                                    height={200}
                                                    className="object-contain"
                                                />
                                            ) : (
                                                <div className="text-primary/30 text-6xl font-bold">
                                                    {getInitials(project.title)}
                                                </div>
                                            )}
                                        </motion.div>
                                        <div className="absolute top-4 left-4">
                                            <Badge className="bg-primary/20 text-primary border-primary/30">
                                                {project.category}
                                            </Badge>
                                        </div>
                                    </div>

                                    <CardContent className="p-6">
                                        {/* Project Header */}
                                        <div className="mb-4 flex items-start justify-between">
                                            <div>
                                                <h3 className="text-foreground group-hover:text-primary mb-2 text-xl font-bold transition-colors">
                                                    {project.title}
                                                </h3>
                                                <div className="text-muted-foreground flex items-center space-x-4 text-sm">
                                                    <div className="flex items-center space-x-1">
                                                        <Calendar size={14} />
                                                        <span>{project.date}</span>
                                                    </div>
                                                    <div className="flex items-center space-x-1">
                                                        <Users size={14} />
                                                        <span>{project.teamSize}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex space-x-2">
                                                {project.githubUrl && (
                                                    <Button
                                                        variant="outline"
                                                        size="icon"
                                                        className="opacity-0 transition-opacity group-hover:opacity-100"
                                                    >
                                                        <a href={project.githubUrl} target="_blank">
                                                            <Github size={16} />
                                                        </a>
                                                    </Button>
                                                )}
                                                {project.liveUrl && (
                                                    <Button
                                                        variant="outline"
                                                        size="icon"
                                                        className="opacity-0 transition-opacity group-hover:opacity-100"
                                                    >
                                                        <a href={project.liveUrl} target="_blank">
                                                            <ExternalLink size={16} />
                                                        </a>
                                                    </Button>
                                                )}
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="text-muted-foreground mb-4 leading-relaxed">
                                            {project.description}
                                        </p>

                                        {/* Highlights */}
                                        <div className="mb-4">
                                            <h4 className="text-foreground mb-2 text-sm font-semibold">
                                                Key Features:
                                            </h4>
                                            <ul className="text-muted-foreground space-y-1 text-sm">
                                                {project.highlights.map((highlight, idx) => (
                                                    <li key={idx} className="flex items-center space-x-2">
                                                        <div className="bg-primary h-1.5 w-1.5 rounded-full" />
                                                        <span>{highlight}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Technologies */}
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech, idx) => (
                                                <Badge key={idx} variant="secondary" className="text-xs">
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    {/* Call to Action */}
                    <motion.div variants={itemVariants} className="mt-16 text-center">
                        <div className="from-primary/10 to-accent/10 rounded-2xl bg-gradient-to-r p-8">
                            <h3 className="text-foreground mb-4 text-2xl font-bold">Interested in Working Together?</h3>
                            <p className="text-muted-foreground mx-auto mb-6 max-w-2xl">
                                I&apos;m always open to discussing new opportunities and exciting projects. Let&apos;s
                                create something amazing together!
                            </p>
                            <div className="flex flex-col justify-center gap-4 sm:flex-row">
                                <Button size="lg" className="rounded-full px-8">
                                    <a href={`mailto:${Links.Email}`}>Get In Touch</a>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
