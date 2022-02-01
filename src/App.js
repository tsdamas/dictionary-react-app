
import './App.css';
import Dictionary from "./Dictionary";


export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
      </header>
      <main>
       <Dictionary defaultKeyword="sunset"/>
      </main>
      <footer className="App-footer">
        <small> 
          Coded by Thais Damasceno, <a href="https://github.com/tsdamas/dictionary-react-app">open-source</a> on GitHub and hosted on Netifly
        </small>
      </footer>
      </div>
      </div>
  );
}

