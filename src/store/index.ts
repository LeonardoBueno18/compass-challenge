import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { InjectionKey } from 'vue'
import { contact, ContactState } from "./modules/contact";
import { NOTIFY } from "./mutation-type";


export interface State {
    contact: ContactState,
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
    state: {
        contact: {
            contact: []
        }
    },
    mutations: {
        [NOTIFY](state, payload: string) {
            alert(payload)
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