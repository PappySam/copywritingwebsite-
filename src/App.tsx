/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Results from "./components/Results";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Results />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

