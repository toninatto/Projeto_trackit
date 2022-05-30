import Topo from "./topo";
import Menu from './menu';

export default function Historico () {

    return (
        <div className="corpo">
        <Topo />
        <div className="add-meus-habitos">
            <p>Histórico</p>            
        </div>
        <div className="sem-habitos">
            <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
        </div>  
        <Menu />
        </div>
    )
}