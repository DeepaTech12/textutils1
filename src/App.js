//import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import TextFile from './Components/TextFile';



function App() {
  return (
    <>
  <NavBar title="Textutils" aboutText="home" />
  <div className="container">
    <TextFile heading="Enter your text to analyze"/>
    </div>
  </>

  );
}

export default App;
