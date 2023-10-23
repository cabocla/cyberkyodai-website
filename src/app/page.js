"use client";

import Clans from "./components/clans";
import Feature from "./components/feature";
import Footer from "./components/footer";
import Gameplay from "./components/gameplay";
import Hero from "./components/hero";
import Introduction from "./components/introduction";
import Outro from "./components/outro";

function Home() {
  return (
    <>
      <div>
        <Hero />
        <Introduction />
        <Feature />
        <Clans />
        <Gameplay />
        <Outro />
      </div>
      <Footer />
    </>
  );
}

export default Home;
