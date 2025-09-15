import Promo from "../components/Promo/Promo";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Portfolio from "../components/Portfolio/Portfolio";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <div className="wrapper grid relative pt-[60px] md:pt-[80px] bg-white">
        <Header />
        <main id="main-content" tabIndex="-1">
          <Hero />
          <Promo />
          <Portfolio />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Home;
