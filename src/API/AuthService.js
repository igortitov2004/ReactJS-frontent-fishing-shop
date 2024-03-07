import axios from "axios";
import { request, setAuthHeader } from './axios_helper';
export default class AuthService{
    static async auth({authRequest}){
        request(
            "POST",
            "/auth/authenticate",
            authRequest).then(
            (response) => {
                setAuthHeader(response.data.token,response.data.role,response.data.username);
            }).catch(
            (error) => {
                console.log(error.name)
                setAuthHeader(null,null);
            }
        );
    }
    static async register({registerRequest}){
        request(
            "POST",
            "/auth/register",
            registerRequest).then(
            (response) => {
                setAuthHeader(response.data.token,response.data.role,response.data.username);
            }).catch(
            (error) => {
                setAuthHeader(null,null);
            }
        );
    }
}

