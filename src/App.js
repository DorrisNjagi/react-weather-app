import './App.css';
import Weather from './weather';

export default function App() {
  return (
    <div className="App">
      <div className="container">
    <Weather defaultCity="Tokyo" />
     <footer>
      This project was coded by Dorris Njagi and is  {""}
     <a href='https://github.com/DorrisNjagi/react-weather-app'
      target='blank'>open-sourced on GitHub</a> {""}
       and {""}
     <a href='https://react-weather-app-by-dorris-njagi.netlify.app'>hosted on Netlify </a>
     
     </footer>
    
    </div>
    </div>
  );
}


