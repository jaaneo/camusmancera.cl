import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CampamentoOnline from "./components/CampamentoOnline";
import CampamentoInfo from "./components/CampamentoInfo";
import RadioCapsulas from "./components/RadioCapsulas";
import Profesores from "./components/Profesores";
import Programa from "./components/Programa";
import Patrocinadores from "./components/Patrocinadores";
import Preguntas from "./components/Preguntas";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CampamentoOnline videoId="s1zHw2KOhEQ" />
      <CampamentoInfo />
      <RadioCapsulas />
      <Profesores />
      <Programa />
      <Patrocinadores />
      <Preguntas />
      <Footer />
    </>
  );
}
