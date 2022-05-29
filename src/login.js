import logo from "./Logo.png";
import { Link } from 'react-router-dom'

export default function Login () {

    return (
        <>
        <div className="inputs">
        <img src={logo} alt="qualquer coisa"/>                
        <input type="text" placeholder="email" />
        <input type="text" placeholder="senha" />
        <button><p> Entrar </p></button>
        <Link to={"/cadastro"}><p>Não tem uma conta? Cadastre-se!</p></Link>
        </div>
        </>
    )
}

