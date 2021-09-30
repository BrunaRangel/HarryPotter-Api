import axios from 'axios'

export const api = axios.create ({
    baseURL: "https://hp-api.herokuapp.com/api/characters"
})
