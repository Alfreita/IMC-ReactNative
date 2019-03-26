/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
   StyleSheet,
   Text,
   View,
   TextInput,
   TouchableOpacity
   } from 'react-native';
import { identifier } from '@babel/types';


type Props={};
export default class App extends Component<Props> {

  constructor(props){
    super(props)
    this.state = {altura:0,massa:0,resultado:0,resultadoText:""}
    this.calcular = this.calcular.bind(this)
  }

  calcular(){
   
    let imc = parseFloat(this.state.massa) / parseFloat(this.state.altura * this.state.altura);
    let s = this.state;
    s.resultado=imc;

    if(s.resultado<16){
      s.resultadoText="Magreza grave"
    }else if(s.resultado <17){
      s.resultadoText ="Magreza moderada"
    }else if(s.resultado <18.5){
      s.resultadoText="Magreza Leve"
    }else if(s.resultado<25){
      s.resultadoText="Saudavel"
    }else if(s.resultado <30){
      s.resultadoText="Sobrepese"
    }else if (s.resultado <35){
      s.resultadoText="Obesidade Grau I"
    }else if(s.resultado <40){
      s.resultadoText="Obesidade Grau II (Severa)"
    }else if(s.resultado >40){
      s.resultadoText="Obesidade Grau III (Mórbida)"
    }





    this.setState(s);
  }

  render() {
    return (
      <View style={styles.container}>
      <View style={styles.inputView}>  
          <TextInput placeholder="Altura" keyboardType="numeric"
           style={styles.input}
           onChangeText={(altura)=>{this.setState({altura})}}/> 
          <TextInput placeholder="Massa" keyboardType="numeric" 
           style={styles.input}
           onChangeText={(massa)=>{this.setState({massa})}}/> 
      </View>
        <TouchableOpacity style={styles.touch}
        onPress={this.calcular}>
        <Text style={styles.button}>Calcular</Text>
        </TouchableOpacity>
        <Text style={styles.resultado}>{this.state.resultado.toFixed(2)}</Text>
        <Text style={styles.resultado}>{this.state.resultadoText}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   // justifyContent: 'center',
   // alignItems: 'center',
    backgroundColor: '#F5FCFF',
    },
  inputView:{
    flexDirection:"row"
  },
  input:{
    height:80,
    textAlign:"center",
    width:"50%",
    fontSize:50,
    marginTop:24
  },
  touch:{
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    //justifyContent:'center',
    //width:100,
   // height:100,
    backgroundColor:'#fff',
    borderRadius:10,
  },
  button:{
    alignSelf:"center",
    padding:30,
    fontSize:25
  },
  resultado:{
    alignSelf:"center",
    padding:5,
    fontSize:25
  }
 
});
