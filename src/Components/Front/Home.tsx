import Footer from "./Footer";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import NowShowing from "../Front/NowShowing";
import Services from "./Services";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <NowShowing />
      <Services />
      <Footer />
    </>
  );
};

export default Home;
