import './App.css';
import StartContent from './Components/Start-Content/Start-Content';
import Kebaby from './Components/Kebaby/Kebaby';

function App() {
  return (
    <div className="App">
      <div className='baner'>
          <a href="#">Home</a>
          <a href="#">News</a>
          <a href="#">Kebaby</a>
          <img id='logo-baner' src='logo.png'></img>
      </div>
        <Kebaby></Kebaby>
      <div className='footer'>
        <p> &copy; {new Date().getFullYear()} Stronę stworzyli: Michał Zieleniecki, Mateusz Wiszowaty, Konrad Palikot</p>
      </div>
    </div>
  );
}

export default App;
