import './App.css';
import Navbar from './components/Navbar';
import Shop from './components/Shop';

function App() {
  return (
    <>
      <Navbar />
      <div className="container p-3">
        <Shop />
      </div>
    </>
  );
}

export default App;
