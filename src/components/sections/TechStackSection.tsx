"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Database, GitBranch, Globe, Server, Wrench } from "lucide-react";

export function TechStackSection() {
    const techCategories = [
        {
            category: "Frontend",
            icon: Globe,
            color: "from-blue-500 to-cyan-500",
            technologies: [
                { name: "React", level: 90 },
                { name: "Next.js", level: 80 },
                { name: "TypeScript", level: 80 },
                { name: "Tailwind CSS", level: 70 },
                { name: "Material-UI", level: 75 },
            ],
        },
        {
            category: "Backend",
            icon: Server,
            color: "from-green-500 to-emerald-500",
            technologies: [
                { name: "PHP", level: 90 },
                { name: "Laravel", level: 90 },
                { name: "NodeJS", level: 50 },
                { name: "REST APIs", level: 80 },
            ],
        },
        {
            category: "Database",
            icon: Database,
            color: "from-purple-500 to-pink-500",
            technologies: [
                { name: "MySQL", level: 85 },
                { name: "PostgreSQL", level: 75 },
                { name: "MongoDB", level: 70 },
                { name: "Redis", level: 80 },
            ],
        },
        {
            category: "DevOps",
            icon: Wrench,
            color: "from-indigo-500 to-purple-500",
            technologies: [
                { name: "Linux", level: 80 },
                { name: "Vercel", level: 70 },
                { name: "Docker", level: 40 },
                { name: "CI/CD", level: 40 },
            ],
        },
        {
            category: "Tools",
            icon: GitBranch,
            color: "from-yellow-500 to-orange-500",
            technologies: [
                { name: "Git", level: 80 },
                { name: "Postman", level: 50 },
                { name: "Copilot", level: 50 },
                { name: "Warp Agent Development", level: 50 },
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

    const skillVariants = {
        hidden: { width: 0 },
        visible: (level: number) => ({
            width: `${level}%`,
            transition: {
                duration: 1,
                delay: 0.5,
                ease: "easeOut" as const,
            },
        }),
    };

    return (
        <section id="tech-stack" className="bg-background py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={containerVariants}
                    className="mx-auto max-w-6xl"
                >
                    {/* Section Header */}
                    <motion.div variants={itemVariants} className="mb-16 text-center">
                        <h2 className="text-foreground mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">Tech Stack</h2>
                        <p className="text-muted-foreground mx-auto max-w-2xl text-xl">
                            Technologies and tools I use to bring ideas to life
                        </p>
                    </motion.div>

                    {/* Tech Categories */}
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {techCategories.map((category) => (
                            <motion.div key={category.category} variants={itemVariants} className="group">
                                <Card className="group-hover:shadow-primary/10 h-full transition-all duration-300 group-hover:shadow-xl">
                                    <CardContent className="p-6">
                                        {/* Category Header */}
                                        <div className="mb-6 flex items-center space-x-3">
                                            <div
                                                className={`rounded-lg bg-gradient-to-r p-2 ${category.color} text-white`}
                                            >
                                                <category.icon size={20} />
                                            </div>
                                            <h3 className="text-foreground text-xl font-semibold">
                                                {category.category}
                                            </h3>
                                        </div>

                                        {/* Technologies */}
                                        <div className="space-y-4">
                                            {category.technologies.map((tech) => (
                                                <div key={tech.name} className="space-y-2">
                                                    <div className="flex items-center justify-between">
                                                        <span className="text-foreground text-sm font-medium">
                                                            {tech.name}
                                                        </span>
                                                        <Badge variant="secondary" className="text-xs">
                                                            {tech.level}%
                                                        </Badge>
                                                    </div>
                                                    <div className="bg-muted h-2 w-full overflow-hidden rounded-full">
                                                        <motion.div
                                                            initial="hidden"
                                                            whileInView="visible"
                                                            viewport={{ once: true }}
                                                            variants={skillVariants}
                                                            custom={tech.level}
                                                            className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    {/* Additional Skills */}
                    <motion.div variants={itemVariants} className="mt-16 text-center">
                        <h3 className="text-foreground mb-6 text-2xl font-bold">Additional Skills</h3>
                        <div className="flex flex-wrap justify-center gap-3">
                            {[
                                "Agile/Scrum",
                                "Web Performance",
                                "Accessibility",
                                "API Design",
                                "System Design",
                                "Code Review",
                                "Mentoring",
                                "Test-Driven Development",
                                "Microservices",
                                "Problem Solving",
                            ].map((skill, index) => (
                                <motion.div
                                    key={skill}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <Badge variant="outline" className="px-3 py-1 text-sm">
                                        {skill}
                                    </Badge>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Learning Section */}
                    <motion.div variants={itemVariants} className="mt-16 text-center">
                        <div className="from-primary/10 to-accent/10 rounded-2xl bg-gradient-to-r p-8">
                            <h3 className="text-foreground mb-4 text-2xl font-bold">Currently Learning</h3>
                            <p className="text-muted-foreground mx-auto mb-6 max-w-2xl">
                                I&apos;m always expanding my skillset and staying up-to-date with the latest
                                technologies
                            </p>
                            <div className="flex flex-wrap justify-center gap-3">
                                {["PrismPHP", "NativePHP", "Go"].map((skill, index) => (
                                    <motion.div
                                        key={skill}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <Badge className="bg-primary/20 text-primary border-primary/30 px-4 py-2 text-sm">
                                            {skill}
                                        </Badge>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
