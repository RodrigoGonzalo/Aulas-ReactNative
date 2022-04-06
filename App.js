
import React from 'react';
import { StyleSheet, TextInput, View, StatusBar, Button, Alert } from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      peso: 0.0,
      altura: 0.0
    }
  }

  CalcularIMC = _=>{
    const {peso, altura} = this.state
    const imc = peso/ altura **2

    // isNaN - is not a number - condição ´para ver se tem números no campo
    if(Number.isNaN(peso) || Number.isNaN(altura)){
      Alert.alert("Erro, Preencha os campos corretamente seu animal")
      return
    }

    let categoria = ""

    if (!peso && !altura){
      categoria = "Preencha os campos!!!"
    }
    else if (imc < 18.5){
      categoria = "Tá magro demais, vai comer desnutrido"
    }
    else if(imc >= 15.5 && imc < 25){
      categoria = "Tá normal"
    }
    else if(imc >= 25 && imc < 30){
      categoria = "Tá gordo em, vai praticar exercício"
    }
    else{
      alert("Vá se tratar")
    }

    const mensagem = `IMC = ${imc.toFixed(1)}\n${categoria}}`
    Alert.alert("Índice de massa corporal", mensagem)
  }
  render(){
    return (
      <View style={estilo.container}>
        <TextInput
          style={estilo.input}
          placeholder="Peso"
          keyboardType="numeric"
          onChangeText={peso => this.setState({peso})}
        />
      
        <TextInput
          style={estilo.input}
          placeholder="Altura"
          keyboardType="numeric"
          onChangeText={altura => this.setState({altura})}

        />
        <View style={estilo.container}>
        <Button 
          keyboardType = "numeric"
          title="Calcular IMC" 
          onPress={this.CalcularIMC}
        />
        </View>
        <StatusBar/>
      </View>
    )
    }
}

const estilo = StyleSheet.create({
  container: {
    padding: 10,
  },

  input:{
    borderColor: 'red',
    borderWidth: 2.0,
    fontSize: 20,
    marginBottom: 20,
    paddingHorizontal: 140,
  },
  
})
