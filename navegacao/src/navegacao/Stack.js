import React from "react"
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import TelaA from "../views/TelaA"
import TelaB from "../views/TelaB"
import TelaC from "../views/TelaC"
import PassoStack from "../components/PassoStack"

const Stack = createNativeStackNavigator()

export default props => (
    <Stack.Navigator
        initialRouteName='TelaA'
        screenOptions={{
            // headerShown: false //Suprimir o header da página
        }}>
        <Stack.Screen
            name="TelaA"
            options={{
                title: 'Informações iniciais (TelaA)',
            }}>
            {props =>(
                <PassoStack {...props} avancar='TelaB'>
                    {/* <TelaA {...props} /> */}
                    <TelaA />
                </PassoStack>
            )}
        </Stack.Screen>
        <Stack.Screen
            name="TelaB">
            {props =>(
                <PassoStack {...props} avancar='TelaC' voltar
                    avancarParams={{ numero: 100 }}>    
                    {/* <TelaA {...props} /> */}
                    <TelaB />
                </PassoStack>
            )}
        </Stack.Screen>
        <Stack.Screen
            name="TelaC">
            {props =>(
                <PassoStack {...props} avancar='TelaC' voltar>
                    <TelaC {...props} />
                </PassoStack>
            )}
        </Stack.Screen>
    </Stack.Navigator>
)