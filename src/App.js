import {useEffect} from "react";
import "./App.css";
import AOS from 'aos';
import 'aos/dist/aos.css'
import HeaderContainer from "./components/HeaderContainer";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import FactsSection from "./components/FactsSection";
import SkillsSection from "./components/SkillsSection";
import ResumeSection from "./components/ResumeSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ScrollToTop from "./components/ScrollToTop";
import ContactForm from "./components/ContactForm";

function App() {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <>
            <Header
                Container/>
            <HeroSection/>
            <main id="main">
                <AboutSection/>
                <FactsSection/>
                <SkillsSection/>
                <ResumeSection/>
                <TestimonialsSection/>
                <ContactForm/>
            </main>
            <ScrollToTop/>
        </>
    );
}

export default App;
