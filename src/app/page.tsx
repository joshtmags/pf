import { Navigation } from "@/components/Navigation";
import { AboutSection } from "@/components/sections/AboutSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { TechStackSection } from "@/components/sections/TechStackSection";

export default function Home() {
    return (
        <div className="bg-background text-foreground min-h-screen">
            <Navigation />
            <main className="relative">
                <HeroSection />
                <AboutSection />
                <TechStackSection />
                <ProjectsSection />
            </main>
        </div>
    );
}
