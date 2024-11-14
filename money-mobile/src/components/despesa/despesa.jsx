import { Text, View, Image, TouchableOpacity } from "react-native";
import {styles} from "./despesa.style.js";
//import icons from "../../constants/icons.js";

const Despesa = (props) => {
    //console.log('icon prop:', props.icon);
    return <TouchableOpacity onPress={()=>props.onClick(props.id)}>
        <View style={styles.despesa}>
            <View style={styles.containerIcon}>
                <Image style={styles.despesaIcon} source={{ uri: props.icon }}/>
            </View>

            <View style={styles.containerCategoria}>
                <Text style={styles.despesaCategoria}>{props.categoria}</Text>
                <Text style={styles.despesaDescricao}>{props.descricao}</Text>
            </View>

            <View style={styles.containerValor}>
                <Text style={styles.despesaValor}>{Number(props.valor).toLocaleString('pt-BR',{minimumFractionDigits:2})}</Text>
            </View>
            
        </View>
    </TouchableOpacity>
}

export default Despesa;