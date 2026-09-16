
import  {useState, UseState} from "react";
import { useNavigate, UseNavigate} from "react-router-dom";
import { api } from "../api";

export  default function NovoContribuintePage(){
   const [nome, setNome] = useState("");
   const [nuit, setNuit] = useState("");
   const [erro, setErro] = useState("");
   const [salvando, setSalvando] = useState(false);
   const navegar = useNavigate();

   function validar(){
    if(nome.trim().length < 3)
        return "Nome precisa de pelo menos 3 letras.";

    if(!/^\d{9}$/.test(nuit))
        return "NUIT precisa de exatamente 9 digitos"

    return "";
   }


   async function enviar(e) {

        e.preventDefault();

        const problema = validar();
        if(problema){
            setErro(problema);
            return;
        }
    setErro("");
    setSalvando(true);
    try{
        await api.criarContribuinte({nuit, nome});
        navegar("/");
       
    }catch{
        setErro("A API recusou. O NUIT já está cadastrado?");
    }finally{
        setSalvando(false);
    }
   }

   return(
    <form onSubmit={enviar}>
        <h2>Novo contribuinte</h2>
        <label htmlFor="nome">Nome completo</label>
        <input
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
        />

        <label htmlFor="nuit">NUIT (9 digitos)</label>
        <input
            id="nuit"
            value={nuit}
            onChange={(e) => setNuit(e.target.value)}
        />
        
        
    </form>
   )
}