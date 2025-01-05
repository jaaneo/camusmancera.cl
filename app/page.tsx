import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Programa from "./components/Programa";
import RadioCapsulas from "./components/RadioCapsulas";
import Footer from "./components/Footer";
import CampamentoInfo from "./components/CampamentoInfo";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CampamentoInfo />
      <RadioCapsulas />
      <Programa />
      <Footer />
    </>
  );
}
