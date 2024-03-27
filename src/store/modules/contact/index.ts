import IForm from "@/interfaces/IForm";
import { Module } from "vuex";
import { State } from "@/store/index"
import http from "@/http";
import { ADD_CONTACT } from "@/store/action-type";
import { MAKE_CONTACT, NOTIFY } from "@/store/mutation-type";


export interface ContactState {
    contact: IForm[],
}

export const contact: Module<ContactState, State> = {
    mutations: {
        [MAKE_CONTACT](state, payload: IForm) {
            const contact = {
                name: payload.name,
                email: payload.email,
                message: payload.message,
                interest: payload.interest
            } as IForm
            state.contact.push(contact)}
    },
    actions: {
        [ADD_CONTACT](state, payload: IForm) {
            const contact = {
                name: payload.name,
                email: payload.email,
                message: payload.message,
                interest: payload.interest
            } as IForm
            if (contact.interest === '' || contact.name === '' || contact.email === '' || contact.message === '') {
                state.commit(NOTIFY, "Please ensure to fill out all the fields!")
            } else {
                http.post('contact/', contact).then(response => {state.commit(NOTIFY, response.data.msg)})
                    .catch(error => {
                        state.commit(NOTIFY, error.message + ': An error occurred while sending the message! Try again later.')
                    })

            }
        }
    }
}