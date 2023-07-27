import axios from 'axios';
axios.defaults.baseURL = "/api";

export function postUser(values) {
 return axios.post("/users", values)
}

export function postTastes(values) {
    return axios.post("/tastes", values)
}

export function getAll(ressources) {
    return axios.get(`/${ressources}`)
    .then(({data}) => data)
    .catch(error => error)
}

export function getOne(ressources, id) {
    return axios.get(`/${ressources}/${id}`)
    .then(({data}) => data)
    .catch(error => error)
}

export function updateOne(ressources, payload, id) {
    return axios.put(`/${ressources}/${id}`, payload)
    .then(({data}) => data)
    .catch(error => error)
}

export function putTastingSheet(values, id) {
    return updateOne('tastingsheet', values, id)
}