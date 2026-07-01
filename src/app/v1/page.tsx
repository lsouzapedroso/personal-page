import HeroSection from "@/versions/v1/components/HeroSection";
import Navbar from "@/versions/v1/components/Navbar";
import AboutSection from "@/versions/v1/components/AboutSection";
import EmailSection from "@/versions/v1/components/EmailSection";
import Footer from "@/versions/v1/components/Footer";

export default function HomeV1() {
    return (
        <main className="flex min-h-screen flex-col bg-[#121212]">
            <Navbar />
            <div className="container mt-24 mx-auto px-12 py-4">
                <HeroSection />
                <AboutSection />
                <EmailSection />
            </div>
            <Footer />
        </main>
    );
}
