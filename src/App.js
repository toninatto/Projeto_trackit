import {useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./CSS/font.css";
import Login from "./login";
import Cadastro from "./cadastro";
import Habitos from "./habitos";
import Hoje from './hoje';
import Historico from './historico';





export default function App() {

    const[token, setToken] = useState('')    
    const[img, setImg] = useState('')

    return (
        <BrowserRouter>
            <Routes >
                <Route path="/" element={<Login setToken={setToken} setImg={setImg} />} />
                <Route path="/cadastro" element={<Cadastro />} />                
                <Route path="/habitos" element={<Habitos token={token} img={img} />} />
                <Route path="/hoje" element={<Hoje token={token}/>} />
                <Route path="/historico" element={<Historico />} />
            </ Routes>
        </BrowserRouter>
    )
}




