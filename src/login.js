import logo from "./Logo.png";
import { Link, useNavigate } from 'react-router-dom';
import {useState} from 'react';
import axios from 'axios';

export default function Login ({setToken, setImg}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    function logar () {
    
    const body = {
        email: email,
        password: password
    }
    

    const promise = axios.post(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
        body);
        
    promise.then(res => {   
        console.log(res.data);
        setToken(res.data.token); 
        
        setImg(res.data.image);  
        navigate("/habitos");
    })
    

    }


    return (
        <>
        <div className="inputs">
        <img src={logo} alt="qualquer coisa"/>                
        <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" placeholder="senha" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={logar}><p> Entrar </p></button>
        <Link to={"/cadastro"}><p>Não tem uma conta? Cadastre-se!</p></Link>
        </div>
        </>
    )
}

