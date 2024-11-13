import Sidebar from "../../components/sidebar/sidebar.jsx";
import Navbar from "../../components/navbar/navbar.jsx";
import "./cad-despesa.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const CadDespesa = () =>{

    const navigate = useNavigate();
    const [valor, setValor] = useState(0);
    const [descricao,setDescricao] = useState("");
    const [categoria, setCategoria] = useState("");
    const {idUrl} = useParams();

    const SalvarDados = () => {
       // 
       //console.log(valor);
       //console.log(descricao);
       //console.log(categoria);
       navigate("/");
    }

    const GetDadosDespesa = (id) =>{
        setValor(150);
        setDescricao("churrasco");
        setCategoria("mercado");
    }

    useEffect(()=>{
        if (idUrl != "add"){
            GetDadosDespesa(idUrl);
        }

    },[]);

    return <>
        <Sidebar />
        <Navbar />

        <div className="container-despesa-cad">
            <div className="box-despesa-cad">

                
                {
                    idUrl == "add" ? <h1>Nova despesa</h1> : <h1>Editar despesa</h1>
                }

                <div className="input-group">
                    <p>Valor</p>
                    <input value={valor} type="text" className="input-lg w100" id="valor" onChange={(e)=>setValor(e.target.value)}/>
                </div>

                <div className="input-group">
                    <p>Descricao</p>
                    <input value={descricao} type="text" className="input-lg w100" id="valor" onChange={(e)=>setDescricao(e.target.value)}/>
                </div>

                <div className="input-group">
                    <p>Categoria</p>
                    <select value={categoria} id="categoria" className="w100" onChange={(e)=>setCategoria(e.target.value)}>
                        <option value="Carro">Carro</option>
                        <option value="Casa">Casa</option>
                        <option value="Lazer">Lazer</option>
                        <option value="Mercado">Mercado</option>
                        <option value="Educacao">Educacao</option>
                        <option value="Viagem">Viagem</option>
                    </select>
                </div>

                <div className="btn-group text-right" style={{ display: 'flex', gap: '20px' }}>
                    <button onClick={()=>navigate("/")} className="btn btn-blue-outline" style={{ flex: 1 }}>cancelar</button>
                    <button onClick={SalvarDados} className="btn btn-blue ml-20" style={{ flex: 1 }}>salvar</button>
                </div>

            </div>

        </div>
        
    </>
    
}

export default CadDespesa;