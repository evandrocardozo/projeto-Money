import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import icons from "../../constants/icons.js";
import {styles} from "./home.style.js";
import Despesa from "../../components/despesa/despesa.jsx";
import { useEffect, useState, useCallback } from "react";
import api from "../../services/api.js";
import { useFocusEffect } from "@react-navigation/native";

const Home = (props) =>{

    const [total, setTotal] = useState(0);
    const [despesas, setDespesas] = useState([]);

    const dados = [
        {id:1, icon: icons.carro, categoria: "Reparos", descricao: "trocar oleo", valor: 200},
        {id:2, icon: icons.treinamento, categoria: "Curso", descricao: "workshop devpoint", valor: 500},
        {id:3, icon: icons.carro, categoria: "Combustivel", descricao: "gasolina", valor: 150},
        {id:4, icon: icons.viagem, categoria: "Viagem", descricao: "Balneario Camboriu", valor: 345},
        {id:5, icon: icons.mercado, categoria: "Compras", descricao: "compras da semana", valor: 213},
        {id:6, icon: icons.mercado, categoria: "Compras", descricao: "compras da semana", valor: 310},

    ];

    const OpenDespesa = (id) => {
        //console.log("cadastrar despesa")
        props.navigation.navigate("despesa", {id:id});
    }

    const ListarDespesas = async () => {
            
        try{
            // acesso a API
            const response = await api.get("/despesas");

            // lista de despesas
            setDespesas(response.data);

            // despesas total
            let soma = 0;
            for (var i=0; i<response.data.length; i++)
                soma = soma + Number(response.data[i].valor);

            // loop alternativo
            /*
            const soma = dados.reduce(function(prev,current){
                return prev+current.valor
            },0);
            */

            // atualzia variavel de estado
            setTotal(soma);

        } catch (error){

        }

        

    }

    // hook
    useFocusEffect(useCallback(()=>{
        ListarDespesas();

    },[]));

    


    return <View style={styles.container}>
        <Image source={icons.logo} style={styles.logo}/>
    

        <View style={styles.dashboard}>
            <View>
                <Text style={styles.dashboardValor}>R$ {total.toLocaleString('pt-BR',{minimumFractionDigits:2})}</Text>
                <Text style={styles.dashboardText}>Total de Gastos</Text>
            </View>

            <Image source={icons.money} style={styles.dashboardImg}/>

            

        </View>

        <View>
            <Text style={styles.despesasTitulo}>Despesas</Text> 
        </View>
            
        <ScrollView showsVerticalScrollIndicator={false}>
            <View>
                
                {
                    despesas.map((desp)=>{
                        return <Despesa key={desp.id} id={desp.id} icon={desp.categoriaDetalhe.icon} categoria ={desp.categoria} descricao={desp.descricao} valor={desp.valor} onClick={OpenDespesa}/>
                    })
                }
                
            </View>
        </ScrollView>

        <TouchableOpacity style={styles.btnAdd} onPress={() => OpenDespesa(0)}>
            <Image source={icons.add} style={styles.btnAddImage}/>

        </TouchableOpacity>
       

    </View>

}

export default Home;