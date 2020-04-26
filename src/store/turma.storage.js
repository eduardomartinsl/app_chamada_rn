import AsyncStorage from "@react-native-community/async-storage";
import { createEvent, createStore } from "effector";

//store
const turmaStore = createStore({})

//eventos
const updateTurma = createEvent('update turma');

//salva informações
turmaStore.on(updateTurma, (payload) => {
    AsyncStorage.setItem('@stored_turma', JSON.stringify(payload))
})

//recupera informações
(async () => {
    try{
        const value = await AsyncStorage.getItem('@stored_turma');
        if(value!==null){
            const turma = JSON.parse(value);
            return turma;
        }
    }catch(e){
        //precisa?
    }
})();