import About from "./COMPONANT/About";
import Banner from "./COMPONANT/Banner";
import Contact from "./COMPONANT/Contact";
import Footer from "./COMPONANT/Footer";
import Header from "./COMPONANT/Header";
import Projects from "./COMPONANT/Projects";
import Service from "./COMPONANT/Service";
import Skill from "./COMPONANT/Skill";


const App = () => {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <About></About>
      <Skill></Skill>
      <Projects></Projects>
      <Service></Service>
      <Contact></Contact>
      <Footer></Footer>

    </>
  );
};

export default App;