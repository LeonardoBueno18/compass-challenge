import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { InjectionKey } from 'vue'
import { contact, ContactState } from "./modules/contact";
import { INotification } from "@/interfaces/INotification";
import { NOTIFY } from "./mutation-type";

export interface State {
    contact: ContactState,
    notificacoes: INotification[],
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
    state: {
        contact: {
            contact: []
        },
        notificacoes: []
    },
    mutations: {
        [NOTIFY](state, message: string) {
            {
                alert(message)
            }
        }
    },
    actions: {

    },
    modules: {
        contact
    }
})

export function useStore(): Store<State> {
    return vuexUseStore(key)
}