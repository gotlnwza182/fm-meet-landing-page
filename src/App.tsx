import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Logo from "./components/Logo";
import Main from "./components/Main";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center ">
      <Logo />
      <Hero />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
