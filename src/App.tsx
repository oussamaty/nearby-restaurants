import './App.css';
import MapWrapper from './components/MapWrapper';
import SideBar from './components/SideBar';
import { MapProvider } from './contexts/Map';

const App = () => {

  return (
    <div className="App">
      <MapProvider>
        <SideBar />
        <MapWrapper />
      </MapProvider>
    </div>
  );
}

export default App;
