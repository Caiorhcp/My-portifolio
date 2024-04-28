
import NavBar from "../../Components/NavBar/NavBar"
import Footer from "./Footer/Footer"
import Skills from "./Skills/Skills"
import About from "./sections/About/About"
import Hero from "./sections/Hero/Hero"
import Projects from "./sections/Projects/Projects"


const Home = () => {


    return (
        <>
            <NavBar />
            <Hero/>
            <About/>
            <Skills/>
            <Projects/>
            <Footer/>
        </>
    )
}

export default Home