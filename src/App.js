import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Sample React App on Container (TeamCityBuild - latest)
        </p>
        <div>My Env : {process.env.NODE_ENV}</div>
      </header>
    </div>
  );
}

export default App;
