import IForm from "@/interfaces/IForm";
import { Module } from "vuex";
import { State } from "@/store/index"
import http from "@/http";
import { ADD_CONTACT } from "@/store/action-type";
import { NOTIFY } from "@/store/mutation-type";


export interface ContactState {
    contact: IForm[],
}

export const contact: Module<ContactState, State> = {
    mutations: {

    },
    actions: {
        [ADD_CONTACT]({commit}, payload: IForm){
            const contact = {
                name: payload.name,
                email: payload.email,
                message: payload.message,
                interest: payload.interest
            } as IForm
            http.post('contact/', contact)
            .then(response => {
                commit(NOTIFY, response.data.msg)
            })
            .catch(error => {
                console.error(error)
            })
        }
    }
}