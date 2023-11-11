import axios from "axios";
import { iUser } from "../types/interface";

const url = "https://assignment-api-spxd.onrender.com/api"


export const signup = async (data : iUser) => {
    return await axios.post(`${url}/register`, data)
    .then((res) => {
        return res.data
    })
    .catch ((error) => {
        return error
    })
}


export const signin = async (data : iUser) => {
    return await axios.post(`${url}/login`, data)
    .then((res) => {
        return res.data
    })
    .catch((err) => {
        return err
    })
}
