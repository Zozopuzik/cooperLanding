import './App.css';
import Contacts from './components/Contacts/Contacts';
import Header from './components/Header/Header';
import Slider from './components/Slider/Slider';

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Contacts />
    </div>
  );
}

export default App;
