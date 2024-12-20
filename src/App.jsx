import "./app.scss"
import Navbar from "./Components/navbar/Navbar"
import Hero from "./Components/hero/Hero"
import Parallax from "./Components/parallax/Parallax"
import Services from "./Components/services/Services"



const App = () => {
  return <div>

    <section id="Homepage">
      <Navbar/> 
      <Hero/>
    </section>

    <section id="Services">
      <Parallax type="services"/>
    </section>

    <section>
      <Services />
    </section>

    <section id="Portfolio">
      <Parallax type="portfolio"/>
    </section>

    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id="Contact">Contact</section>

    
    

  </div>;
};

export default App;
