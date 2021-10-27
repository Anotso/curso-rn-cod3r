import React from "react"
import { View, Text, Button} from "react-native"

export default props =>{
    return (
        <View style={{
            flex: 1,
        }}>
            <View style={{ flexDirection:'row', justifyContent: 'space-around'}}>
                {props.voltar 
                    ? <Button title="Voltar" onPress={
                        () => props.navigation.goBack()
                    }/>
                : false}
                {props.avancar 
                    ? <Button title="Avançar" onPress={
                        () => props.navigation.push(
                            props.avancar, props.avancarParams,
                            {/*{
                                numero: parseInt(Math.random() * 100)    PODE ENVIAR PARAMETROS POR AQUI PARA A TELA
                            }*/}
                        )
                    }/>
                : false}
            </View>
            <View style={{ flex: 1,}}>
                {props.children}
            </View>
            
        </View>
    )
}

// O NAVIGATION.PUSH() ADICIONA A MESMA TELA NA PILHA. CASO ESTEJA USANDO PARAMETROS
// É NECESSÁRIO O ENVIO DELES OU A VALIDAÇÃO PARA EVITAR QUE QUEBRE A APLICAÇÃO