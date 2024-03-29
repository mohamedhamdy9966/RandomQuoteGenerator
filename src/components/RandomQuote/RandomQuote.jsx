import React from 'react'
import { useState } from 'react'
import './RandomQuote.css'
import twitter_icon from '../Assests/twitter-logo.webp'
import reload from '../Assests/regenerate-icon.png'

export const RandomQuote = () => {
    let quotes = [];
    async function loadQuotes() {
        const response = await fetch("https://type.fit/api/quotes");
        quotes = await response.json();
    }

const [quote,setQuote] =useState({
    text : 'The World Is Yours',
    author : 'Al Pacino'
});
const random = () => {
    const select = quotes [Math.floor(Math.random()*quotes.length)];
    setQuote(select);
}
const twitter = () => {
    window.open(`http://twitter.com/intent/tweet?text=${quote?.text} - ${quote?.author.split(',')[0]}`)
}
loadQuotes();

  return (
    <div className='container'>
        <div className="quote">{quote?.text||quote}
        </div>
        <div>
            <div className="line">
            </div>
            <div className="bottom">
                <div className="author">
                  - {quote?.author.split(',')[0]}
                </div>
                <div className="icons">
                    <img src={reload} onClick={()=>{random()}} alt="regenerate"/>
                    <img src={twitter_icon} onClick={()=>{twitter()}} alt="twitter"/>
                </div>
            </div>
        </div>
        </div>
  )
}
