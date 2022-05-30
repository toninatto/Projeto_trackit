import {useState, useEffect} from 'react';
import axios from 'axios';
import Topo from "./topo";
import Menu from './menu';
import check from "./Vector.png"



export default function Hoje ({token}) {

    console.log(token);

    const [habs, setHabs] = useState ([]);

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    useEffect( ()=> {
        const promise = axios.get(
            "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", 
            config);
        promise.then(res => {
            console.log(res.data);
            setHabs(res.data);}
        );}, [])        


    return (
        <div className="corpo">
        <Topo />
        <div className="add-meus-habitos">
            <p>Seus Hábitos de Hoje</p>            
        </div>

        {habs.map(item => 
            <div className="habito-today">
                <ul className="infos">
                    <h5>{item.name}</h5>
                    <h6>Sequência atual: {item.currentSequence} dias</h6>
                    <h6>Seu recorde: {item.highestSequence} dias</h6>
                </ul>
                <div className="botao-check">
                    <img src={check} alt="Check"/>
                </div>
                </div>
        )

        }


        <Menu />
        </div>
    )
}