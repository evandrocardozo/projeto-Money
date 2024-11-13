import { Text, TextInput, View, TouchableOpacity, Image, TouchableWithoutFeedback,Keyboard } from "react-native";
import {styles} from "./cad-despesa.style.js";
import icons from "../../constants/icons.js";
import {Picker} from '@react-native-picker/picker'; // npx expo install @react-native-picker/picker
//import RNPickerSelect from 'react-native-picker-select';
import { useState } from "react";

const CadDespesa = (props) => {

    const [id,setId] = useState(0);
    const [valor, setValor] = useState(0);
    const [descricao,setDescricao] = useState("");
    const [categoria, setCategoria] = useState("");

    const handleSalvar = () =>{
        props.navigation.navigate("home");

    }

    const handleExcluir = () =>{
        props.navigation.navigate("home");
        
    }



    return <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    
        <View style={styles.container}>
            <View style={styles.containerField}>
                <Text style={styles.inputLabel}>Valor</Text>
                <TextInput placeholder="0,00" style={styles.inputValor} defaultValue="0" keyboardType="decimal-pad"></TextInput>
            </View>

            <View style={styles.containerField}>
                <Text style={styles.inputLabel}>Descricao</Text>
                <TextInput placeholder="aluguel" style={styles.inputText} defaultValue=""></TextInput>
            </View>

            <View style={styles.containerField}>
                <Text style={styles.inputLabel}>Categoria</Text>
                <View  style={styles.inputPicker}>
                
                    <Picker selectedValue={categoria} onValueChange={(itemValue,itemIndex)=>{setCategoria(itemValue);}}>
                        <Picker.Item label="Carro" value="Carro" />
                        <Picker.Item label="Casa" value="Casa" />
                        <Picker.Item label="Lazer" value="Lazer" />
                        <Picker.Item label="Mercado" value="Mercado" />
                        <Picker.Item label="Educacao" value="Educacao" />
                        <Picker.Item label="Viagem" value="Viagem" />
                        
                    </Picker>
                    
                    
                </View>
            </View>

            <View style={styles.containerBtn}>
                <TouchableOpacity style={styles.btn} onPress={handleSalvar}>
                    <Text style={styles.btnText}>Salvar</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.containerDelete}>
                <TouchableOpacity onPress={handleExcluir}>
                    <Image source={icons.remove} style={styles.btnDelete}/>
                </TouchableOpacity>
            </View>

        </View>

    </TouchableWithoutFeedback>
}

export default CadDespesa;