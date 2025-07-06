"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Code, Heart, Lightbulb, Users } from "lucide-react";

export function AboutSection() {
    const values = [
        {
            icon: Code,
            title: "Clean Code",
            description: "I believe in writing maintainable, scalable, and well-documented code.",
        },
        {
            icon: Heart,
            title: "User-Centric",
            description: "Every line of code I write is with the end user's experience in mind.",
        },
        {
            icon: Lightbulb,
            title: "Innovation",
            description: "Always exploring new technologies and creative solutions to problems.",
        },
        {
            icon: Users,
            title: "Collaboration",
            description: "Strong believer in teamwork and open communication.",
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

    return (
        <section id="about" className="bg-muted/30 py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={containerVariants}
                    className="mx-auto max-w-4xl"
                >
                    {/* Section Header */}
                    <motion.div variants={itemVariants} className="mb-16 text-center">
                        <h2 className="text-foreground mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">About Me</h2>
                        <p className="text-muted-foreground mx-auto max-w-2xl text-xl">
                            Passionate developer with a love for creating meaningful digital experiences
                        </p>
                    </motion.div>

                    {/* Main Content */}
                    <div className="mb-16 grid items-center gap-12 lg:grid-cols-2">
                        {/* Personal Story */}
                        <motion.div variants={itemVariants} className="space-y-6">
                            <div className="space-y-4">
                                <p className="text-muted-foreground text-lg leading-relaxed">
                                    Hello! I&apos;m Josh, a passionate full-stack developer with over 5 years of
                                    experience building web applications that solve real-world problems. My journey
                                    began during college when I discovered the power of coding to bring ideas to life.
                                </p>
                                <p className="text-muted-foreground text-lg leading-relaxed">
                                    What started as curiosity has evolved into a deep passion for creating digital
                                    experiences that are not only functional but also beautiful and intuitive. I love
                                    the challenge of turning complex problems into simple, elegant solutions.
                                </p>
                                <p className="text-muted-foreground text-lg leading-relaxed">
                                    When I&apos;m not coding, you can find me exploring new technologies, playing online
                                    games or playing sports like wakeboarding or working out. I also play the guitar by the way.
                                </p>
                            </div>

                            {/* Skills Tags */}
                            <div className="flex flex-wrap gap-2">
                                <Badge variant="secondary">Problem Solver</Badge>
                                <Badge variant="secondary">Team Player</Badge>
                                <Badge variant="secondary">Continuous Learner</Badge>
                                <Badge variant="secondary">Software Design</Badge>
                            </div>
                        </motion.div>

                        {/* Stats/Highlights */}
                        <motion.div variants={itemVariants} className="space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <Card className="p-6 text-center">
                                    <CardContent className="p-0">
                                        <div className="text-primary mb-2 text-3xl font-bold">25+</div>
                                        <p className="text-muted-foreground text-sm">Projects Contributions</p>
                                    </CardContent>
                                </Card>
                                <Card className="p-6 text-center">
                                    <CardContent className="p-0">
                                        <div className="text-primary mb-2 text-3xl font-bold">5+</div>
                                        <p className="text-muted-foreground text-sm">Years Experience</p>
                                    </CardContent>
                                </Card>
                                <Card className="p-6 text-center">
                                    <CardContent className="p-0">
                                        <div className="text-primary mb-2 text-3xl font-bold">24/7</div>
                                        <p className="text-muted-foreground text-sm">Support</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </motion.div>
                    </div>

                    {/* Values */}
                    <motion.div variants={itemVariants} className="space-y-8">
                        <div className="text-center">
                            <h3 className="text-foreground mb-4 text-2xl font-bold">My Values</h3>
                            <p className="text-muted-foreground mx-auto max-w-2xl">
                                These principles guide every project I work on and every decision I make.
                            </p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                            {values.map((value) => (
                                <motion.div
                                    key={value.title}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.05 }}
                                    className="group"
                                >
                                    <Card className="group-hover:border-primary/20 h-full p-6 text-center transition-all duration-300 group-hover:shadow-lg">
                                        <CardContent className="space-y-4 p-0">
                                            <div className="bg-primary/10 group-hover:bg-primary/20 inline-flex h-12 w-12 items-center justify-center rounded-full transition-colors">
                                                <value.icon size={24} className="text-primary" />
                                            </div>
                                            <h4 className="text-foreground text-lg font-semibold">{value.title}</h4>
                                            <p className="text-muted-foreground text-sm">{value.description}</p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
