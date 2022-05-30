import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom'
import Topo from "./topo";
import Menu from './menu';
import axios from 'axios';
import lixeira from "./deletar.png";

export default function Habitos ({token, img}) {

    console.log(token);

    
    const navigate = useNavigate();
    const [clicado, setClicado] = useState(false);
    const [habito, setHabito] = useState('');
    const [domingo, setDomingo] = useState();
    const [segunda, setSegunda] = useState();
    const [terca, setTerca] = useState();
    const [quarta, setQuarta] = useState();
    const [quinta, setQuinta] = useState();
    const [sexta, setSexta] = useState();
    const [sabado, setSabado] = useState();
    const [habs, setHabs] = useState ([]);

    CarregarHabitos();
    function CarregarHabitos () {
        
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    
        useEffect( ()=> {
            const promise = axios.get(
                "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", 
                config);
            promise.then(res => {
                console.log(res.data);
                setHabs(res.data);}
            );}, [])        
    }

    function criarHabito () {
        
        const days = [domingo, segunda, terca, quarta, quinta, sexta, sabado].filter(clics => clics !== undefined);
        const body = {
            name: habito,
            days: days
        }
        console.log(body)
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        
        
        const promise = axios.post(
            "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", 
            body, config);
        promise.then(res => {
            console.log(res.data);
            
            setClicado(false);
            navigate("/habitos");
        })

    }

    function deletarHabito () {

    }


    return (
        <div className="corpo">
        <Topo img={img} />
               
        <div className="add-meus-habitos">
            <p>Meus hábitos</p>
            <button className="add-habito" onClick={() => setClicado(true)} ><h2> + </h2></button>
        </div>  

              

        {(clicado === true) ? <div className="definir-habito">
        <input type="text" placeholder="nome do hábito" value={habito} onChange={(e) => setHabito(e.target.value)}/>
        <div className="semana">
            {domingo ? <button className="clicado" onClick={() => setDomingo()}><span>D</span></button> : <button className="nao-clicado" onClick={() => setDomingo(1)}><span>D</span></button>}
            {segunda ? <button className="clicado" onClick={() => setSegunda()}><span>S</span></button> : <button className="nao-clicado" onClick={() => setSegunda(2)}><span>S</span></button>}
            {terca ? <button className="clicado" onClick={() => setTerca()}><span>T</span></button> : <button className="nao-clicado" onClick={() => setTerca(3)}><span>T</span></button>}
            {quarta ? <button className="clicado" onClick={() => setQuarta()}><span>Q</span></button> : <button className="nao-clicado" onClick={() => setQuarta(4)}><span>Q</span></button>}
            {quinta ? <button className="clicado" onClick={() => setQuinta()}><span>Q</span></button> : <button className="nao-clicado" onClick={() => setQuinta(5)}><span>Q</span></button>}
            {sexta ? <button className="clicado" onClick={() => setSexta()}><span>S</span></button> : <button className="nao-clicado" onClick={() => setSexta(6)}><span>S</span></button>}
            {sabado ? <button className="clicado" onClick={() => setSabado()}><span>S</span></button> : <button className="nao-clicado" onClick={() => setSabado(7)}><span>S</span></button>}
            
        </div>
        <div className="canc-salvar">
            <ul onClick={() => setClicado(false)}><p>Cancelar</p></ul>
            <button onClick={criarHabito}><p>Salvar</p></button>
        </div>
    </div>: '' }

    {habs.map(item => 
            <div className="habito-carregado">
                <h3>{item.name}</h3>
                <div className="semana">
                    {(item.days.filter(aux => aux === 1).length === 1) ? <button className="clicado" ><span>D</span></button> : <button className="nao-clicado" ><span>D</span></button>}
                    {(item.days.filter(aux => aux === 2).length === 1) ? <button className="clicado" ><span>S</span></button> : <button className="nao-clicado" ><span>S</span></button>}
                    {(item.days.filter(aux => aux === 3).length === 1) ? <button className="clicado" ><span>T</span></button> : <button className="nao-clicado" ><span>T</span></button>}
                    {(item.days.filter(aux => aux === 4).length === 1) ? <button className="clicado" ><span>Q</span></button> : <button className="nao-clicado" ><span>Q</span></button>}
                    {(item.days.filter(aux => aux === 5).length === 1) ? <button className="clicado" ><span>Q</span></button> : <button className="nao-clicado" ><span>Q</span></button>}
                    {(item.days.filter(aux => aux === 6).length === 1) ? <button className="clicado" ><span>S</span></button> : <button className="nao-clicado" ><span>S</span></button>}
                    {(item.days.filter(aux => aux === 7).length === 1) ? <button className="clicado" ><span>S</span></button> : <button className="nao-clicado" ><span>S</span></button>}
                </div>
                <img onClick={deletarHabito} src={lixeira} alt="Perfil"/>
            </div> )}  

        {habs.length ? '':
        <div className="sem-habitos">
            <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
        </div>       
        }
        <Menu />
        </div>
    )
    }