import  { useEffect, useState, UseState} from "react";
import { Link } from "react-router-dom";
import { api } from "../api";


export default function ContribuintesPage(){
    const [lista, setLista] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro]= useState("");

    useEffect(() => {

        api
            .listarContribuintes()
            .then(setLista)
            .catch(() => setErro("Não cansegui falar com a API."))
            .finally(() => setCarregando(false));
    },[]);

    if(carregando) return <p>Carreganso..</p>

    if(erro)
        return <p className="erro" role="alert">(erro)</p>;

    if(lista.length === 0)
        return <p>Nenhum contribuinte cadastrado ainda</p>;

    return(
        <ul className="Lista">
            {lista.map((c) => (
                <li Key={c.id} >
                    <link to={'/contribuintes/${c.id}'}>{c.nome}</link>
                    <span>{c.nuit}</span>
                </li>
            ))}
        </ul>
    );
    
}