import React, { Component } from "react"
import {
    Modal,
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    Text,
    TouchableOpacity,
    TextInput,
    Platform,
} from 'react-native'

import DateTimePicker from '@react-native-community/datetimepicker'
import moment from "moment"

import commonStyles from "../commonStyles"

const initialState = { desc: '', date: new Date(), showDatePicker: false }

export default class AddTask extends Component {

    state = {
        ...initialState
    }

    save = () => {
        const newTask = {
            desc: this.state.desc,
            date: this.state.date
        }
        // Se existir a fnc ele executa ela e manda a nova task
        this.props.onSave && this.props.onSave(newTask)
        this.setState({ ...initialState })
    }

    getDatePicker = () => {
        let datePicker = <DateTimePicker
            value={this.state.date}
            onChange={(_, date) => { this.setState({ date: date != undefined ? date : new Date(), showDatePicker: false }) }}
            mode='date'
        />
        //A validação adicionada no onChange serve para evitar que o App quebre quando clica em "Cancelar" no DateTimePicker por passar o valor undefined para dentro do estado

        const dateString = moment(this.state.date).format('ddd, D [de] MMMM [de] YYYY')

        if (Platform.OS === 'android') {
            datePickerPrint = (
                <View>
                    <TouchableOpacity
                        onPress={() => this.setState({ showDatePicker: true })}
                    >
                        <Text style={styles.date}>
                            {dateString}
                        </Text>
                    </TouchableOpacity>
                    {this.state.showDatePicker && datePicker}
                </View>
            )
        }else{
            datePickerPrint = datePicker
        }

        return datePickerPrint
    }

    render() {
        return (
            <Modal
                transparent={true}
                visible={this.props.isVisible}
                onRequestClose={this.props.onCancel}
                animationType='slide'
            >
                <TouchableWithoutFeedback
                    onPress={this.props.onCancel}>
                    <View style={styles.background}>
                    </View>
                </TouchableWithoutFeedback>
                <View style={styles.container}>
                    <Text style={styles.header}>
                        Nova tarefa
                    </Text>
                    <TextInput style={styles.input}
                        placeholder='Informe a descrição...'
                        value={this.state.desc}
                        onChangeText={desc => this.setState({ desc: desc })}
                    />
                    {this.getDatePicker()}
                    <View style={styles.buttons}>
                        <TouchableOpacity onPress={this.props.onCancel}>
                            <Text style={styles.button}>
                                Cancelar
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.save}>
                            <Text style={styles.button}>
                                Salvar
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableWithoutFeedback
                    onPress={this.props.onCancel}>
                    <View style={styles.background}>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    container:{
        backgroundColor: '#fff',
    },
    header:{
        fontFamily: commonStyles.fontFamily,
        backgroundColor: commonStyles.colors.today,
        color: commonStyles.colors.secondary,
        textAlign: 'center',
        padding: 15,
        fontSize: 18,
    },
    buttons:{
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    button:{
        margin: 20,
        marginRight: 30,
        color: commonStyles.colors.today,
    },
    input:{
        fontFamily: commonStyles.fontFamily,
        height: 40,
        margin: 15,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#E3E3E3',
        borderRadius: 6,
    },
    date:{
        fontFamily: commonStyles.fontFamily,
        fontSize: 20,
        marginLeft: 15,
    },
})