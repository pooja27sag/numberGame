import React, {Component,FC,useState,useRef} from "react";
import './cards.css';
interface cardProps{
  number:number
}
const randomArrayGenerator = () => {
  
    let numbers = []; // new empty array

let min, max, r, n, p;

min = 1;
max = 9;
r = 9; // how many numbers you want to extract

for (let i = 0; i < r; i++) {
  do {
    n = Math.floor(Math.random() * (max - min + 1)) + min;
    p = numbers.includes(n);
    if(!p){
      numbers.push(n);
    }
  }
  while(p);
}
return numbers;
}

const CardOptions:FC<cardProps> = ({number})  => {
const gameNumber = randomArrayGenerator();
const gameNumberRef = useRef(gameNumber)
const [selectedNumber, setSelectedNumber] = useState<number>()
        return(

            <div className='container'>
                {
                    

                    gameNumberRef.current.map(each=> {
                        return (
                        <div className={selectedNumber === each  ? 'card-background card-body' : 'card-body'} key={each} onClick={() =>setSelectedNumber(each)}>{each}</div>
                        )
                    }
                    )
                }
                    
          
            </div>
        );
    
}
export default CardOptions;