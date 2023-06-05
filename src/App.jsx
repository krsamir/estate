import "./App.css";
import Contacts from "./Components/Contacts";
import Description from "./Components/Description";
import Footer from "./Components/Footer";
import Header from "./Components/Headers/Header";
import Projects from "./Components/Projects/Projects";
import VideoComponent from "./Components/VideoComponent";
import useFirebase from "./Hooks/useFirebase";
function App() {
  useFirebase();
  return (
    <>
      <Header />
      <VideoComponent />
      <Description />
      <Projects />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
