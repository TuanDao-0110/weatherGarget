import logo from './logo.svg';
import './App.css';
import Weather from './Weather/Weather';
import LoadingComponent from './LoadingComponent/LoadingComponent';

function App() {
  return (
    <div>
      <LoadingComponent></LoadingComponent>
      <Weather></Weather>
    </div>
  );
}

export default App;
