
import ResponsiveAppBar from "../../Components/NavBar/NavBar"
import Footer from "./Footer/Footer"
import About from "./sections/About/About"
import Hero from "./sections/Hero/Hero"
import Projects from "./sections/Projects/Projects"


const Home = () => {


    return (
        <>
            <ResponsiveAppBar/>
            <Hero/>
            <About/>
            <Projects/>
            <Footer/>
        </>
    )
}

export default Home