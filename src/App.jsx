import Chip from "./components/Chip.jsx";
import Featured from "./components/Featured.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx"
import HighLight from "./components/HighLight.jsx"
import Model from "./components/Model.jsx"
import NavBar from "./components/NavBar.jsx"
import * as Sentry from "@sentry/react";

const App = () => {

  return (
    <main className="bg-black">
      <NavBar/>
      <Hero/> 
      <HighLight/>
      <Model/>
      <Featured/>
      <Chip/>
      <Footer/>
    </main>
  )
}

export default Sentry.withProfiler(App);