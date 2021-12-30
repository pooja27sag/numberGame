import React, { Component,FC } from 'react';
import './cards.css';
import CardOptions from './CardOptions';
interface cardProps{
    number:number
}

const Cards:FC<cardProps> = ({number}) => {
   
  console.log(number);

        return (
            <div>
            <div className='cards-header'>
            <div>
                Select Any Card
            </div>
            
            </div>
           <CardOptions number={number}/>
               
            
            </div>
        )
        
    
} 


export default Cards;
