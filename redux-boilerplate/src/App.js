import { useSelector } from "react-redux";
import './App.css';
import Navbar from './components/Navbar';
import Shop from './components/Shop';

function App() {

//to access the state variables in UI
const darkmode = useSelector(state => state.darkmode);

let darkmodeStyle = {}

if(darkmode === 'ON') {
    darkmodeStyle = {
        backgroundColor:'#2d2d2d',
        color:'whitesmoke'
    }
}

  return (
    <>
      <Navbar />
      <div className="container p-3" style={darkmodeStyle}>
        <Shop />
      </div>
    </>
  );
}

export default App;
