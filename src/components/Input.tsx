import React,{FC} from 'react';
import "./style.css";
import { useState } from 'react';
import Cards from './Cards';
export interface InputProps {
    onGoClick:(name:string,number:number) => unknown
    
}
const Input:FC<InputProps> = ({onGoClick}:InputProps) => {
    const [name,setName] = useState("");
    const [number,setNumber] = useState(0);
    return (
        <form className='header'>
            <h1>Guess The Number</h1>
            <div>
             <label htmlFor="name" className="input_label">enter your name:</label>
             <input type="text" className="name_input" id='name' onChange={(e) => setName(e.target.value)} />
             </div>
             <div>
             <label htmlFor="num" className="num_box_label">Enter a number:</label>
             <input type="number" className="num_box" id='num'onChange={(e) => setNumber(parseInt(e.target.value))} />
             
             </div>
             <div>
             <button className="btn" onClick={() => {
                 onGoClick(name,number);
             }}>GO</button>
             
             </div>



        </form>
    )

}

export default Input

