import React from "react"
import { View, StyleSheet } from "react-native"

import Field from "./Field"

export default props =>{
    const rows = props.board.map((row, r) => {
        //Este primeiro map vai criar as linhas
        const columns = row.map((field, c) =>{
            //Este segundo map vai criar as colunas e retornar um Field com os valores
            return <Field {...field} key={c} 
            onOpen={()=>props.onOpenField(r, c)}
            onSelect={e => props.onSelectField(r, c)}/>
        })
        //Agora retorna a coluna que foi criada
        return <View key={r} style={{flexDirection: "row"}}>{columns}</View>
    })

    //Agora retorna a linha criada acima
    return <View style={styles.container}>{rows}</View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#EEE",
    },
})