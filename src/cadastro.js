import logo from "./Logo.png";
import { Link, useNavigate } from 'react-router-dom';
import {useState} from 'react';
import axios from 'axios';


export default function Cadastro () {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [image, setImage] = useState('');
    const navigate = useNavigate();

    function criarCadastro () {
        const body = {
            email: email,
	        name: name,
	        image: image,
	        password: password
        }
        console.log(body)
         const promise = axios.post(
             "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",
             body
         )
        
         promise.then(res => {
             console.log(res.data)
             navigate("/");
         })
    }

    return (
        <>
        <div className="inputs">
        <img src={logo} alt="qualquer coisa"/>        
        <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="senha" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <input type="text" placeholder="nome" value={name} onChange={(e) => setName(e.target.value)}/>
        <input type="text" placeholder="foto" value={image} onChange={(e) => setImage(e.target.value)}/>
        <button onClick={criarCadastro}><p> Cadastrar </p></button>
        <Link to={"/"}><p>Já tem uma conta? Faça o login!</p></Link>
        </div>
        </>
    )
}