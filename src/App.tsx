import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Cards from './components/Cards';
import Input from './components/Input';

function App() {
  const [isGameStart,setIsGameStart] = useState(false)
const [card, setCard] = useState({name:"",number:0})
  return (
    <div className="App">
      {
      isGameStart? <Cards number={card.number}/>: <Input onGoClick={(a,b) => {setCard({name:a,number:b}); setIsGameStart(!isGameStart)} }/>
      }
    
     
    </div>
  );
}

export default App;
