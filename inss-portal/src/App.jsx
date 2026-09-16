import { Routes, Route, Link} from "react-router-dom";
import ContribuintesPage from "./paginas/ContribuintesPage";
import NovoContribuintePage from "./paginas/NovoContribuintePage";
import ContribuinteDetalhePage  from "./paginas/ContribuinteDetalhePage";
import PedidosPage from ".paginas/PedidosPage";

export default function App(){
  return (
    <div className="app">
      <header>
        <h1>Portal INSS</h1>
        <nav>
          <link to="/">Contribionte</link>
          <link to="/novo">Novo cadastro</link>
          <link to="/pedidos">Pedidos</link>
        </nav>
      </header>

       <nav>
        <Routes>
          <Route path="/" element={<ContribuintesPage/>}/>
          <Route path="/novo" element={<NovoContribuintePage/>}/>
          <Route path="/pedidos" element={<PedidosPage0/>}/>
          <Route path="/contribuintes/:id" element={<ContribuinteDetalhePage/>}/>          
        </Routes>
      </nav>
    </div>
   
  );
}