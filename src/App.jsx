import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Articles } from "./components/Articles";
import { Footer } from "./components/Footer";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const headerProps = { isOpen, setIsOpen };
  return (
    <>
      <Header {...headerProps} />
      <Hero />
      <About />
      <Articles />
      <Footer />
    </>
  );
}

export default App;
