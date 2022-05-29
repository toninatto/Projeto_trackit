
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./CSS/font.css";
import Login from "./login";
import Cadastro from "./cadastro";
import Habitos from "./habitos";


export default function App() {

    return (
        <BrowserRouter>
            <Routes >
                <Route path="/" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />                
                <Route path="/habitos" element={<Habitos />} />
            </ Routes>
        </BrowserRouter>
    )
}




