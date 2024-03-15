import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const login = (data, callback) => {
    axios
    .post('https://fakestoreapi.com/auth/login', data)
    .then((res)=>{
        callback(true, res.data.token); // Mengirimkan token ke callback jika berhasil
    }).catch((error)=>{
        callback(false, error); // Mengirimkan error ke callback jika terjadi kesalahan
    });
};
export const getUsername = (token) => {
    const decoded = jwtDecode(token);
    return decoded.user;
}