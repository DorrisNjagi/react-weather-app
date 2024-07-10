import './App.css';
import Weather from './weather';

export default function App() {
  return (
    <div className="App">
      <div className="container">
    <Weather defaultCity="Tokyo" />
     <footer>
      This project was coded by Dorris Njagi  {""}
     <a href='https://github.com/DorrisNjagi/react-weather-app' target='blank' >
     and is open-sourced on GitHub
     </a>
     </footer>
    
    </div>
    </div>
  );
}


