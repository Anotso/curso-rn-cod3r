import { Alert, Platform } from "react-native"

const server = Platform.OS === 'ios' ? 'http://localhost:3000' : 'http://10.0.2.2:3000'

function showError(err) {
    if (err.response && err.response.data) {
        Alert.alert('Ops! Ocorreu um problema ao efetuar o login!', `Mensagem: ${err.response.data}`)
    }else{
        //Pegar o código do erro: err.response.status
        Alert.alert('Ops! Ocorreu um problema!', `Mensagem: ${err.response.status}`)
    }
}

function showSuccess(msg) {
    Alert.alert('Sucesso!', msg)
}

export { server, showError, showSuccess }