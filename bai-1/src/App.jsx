import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import Content from "./components/Content";
import NavigationMenu from "./components/NavigationMenu";
import "./App.css";




function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <NavigationMenu />
      <div className="main">
        <Content text="Content 1" number ={10} active = {true} />
        <MainContent />
        <Content text="Content 2" number ={20} active = {false} />
      </div>
      <Footer />
    </>
  );
}

export default App;
