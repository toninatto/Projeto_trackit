import { Link } from "react-router-dom"

export default function Menu () {

    return (
        <>
        <div className="menu">
            <Link to={"/habitos"}><h4>Hábitos</h4></Link>
            <Link to={"/historico"}><h4>Histórico</h4></Link>
        </div>
        <div className="circulo-hoje">
            <Link to={"/hoje"}><h4>Hoje</h4></Link>
        </div>
        </>
    )
}