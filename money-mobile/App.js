import { KeyboardAvoidingView, SafeAreaView,Platform } from 'react-native';
import Home from "./src/screens/home/home.jsx";
import CadDespesa from './src/screens/cad-despesa/cad-despesa.jsx';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator();

function App() {
  return (
  <> 
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="home">
            <Stack.Screen name="home" component={Home} options={{headerShown:false}}/>
            <Stack.Screen name="despesa" component={CadDespesa} options={{title:"Despesa", headerTitleAlign:"center", headerTintColor: "black",headerShadowVisible: false,headerBackTitleVisible: false}}/>
          </Stack.Navigator>
        </NavigationContainer>
      </KeyboardAvoidingView>
    </SafeAreaView>
  </>   
  );
}

export default App;
