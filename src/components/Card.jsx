import React from 'react'
import { useState, useEffect } from 'react';
import './card.css';
import axios from 'axios';

const baseUrl = "https://api.adviceslip.com/advice";
const Card = () => {
    

    const [advice, setAdvice] = useState([]);

    useEffect (()=>{
        axios.get(`${baseUrl}`)
    .then((res) => {
       console.log(res.data.slip);

    }).catch((err) => { console.log("ops!Ocorreu um erro." + err);

    }, [])

    })

    const [ callApi, setCallApi] = useState(false);

    useEffect(() => {
        axios.get(`${baseUrl}`)
        .then((res)=> {  setAdvice(res.data.slip);

        })
        .catch((err) => { console.log("ops!Ocorreu um erro." + err)});
    

        
    }, [callApi])



  return (
    <div className='main'>
       
        <div className="conselhos">
        
        <h1> {advice.advice} </h1> <br></br>
      
        <button className="botao" onClick={( ) => setCallApi(!callApi)}>GIVE ME A ADVICE!</button>

        </div>
       
    </div>
  )
}

export default Card