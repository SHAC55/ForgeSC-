import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Work from "../components/Work";
import Services from "../components/Services";
import Products from "../components/Products";
import Process from "../components/Process";
import About from "../components/About";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-[#f6f1e9] text-[#111111]">
      <Navbar />

      <main>
        <Hero />
        <Work />
        <Services />
        {/* <Products /> */}
        <Process />
        <About/>
        <CTA/>
        <Footer/>
      </main>
    </div>
  );
};

export default Home;