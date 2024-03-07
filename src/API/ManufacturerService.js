import axios from "axios";
import {request, setAuthHeader} from "./axios_helper";

export default class ManufacturerService{
    static async getAll(){
        const response = await axios.get(
            "http://localhost:7777/manufacturers/").catch((err) => {
            console.log(err)
        })
        return response.data
    }
    static async create({item}){

        request(
            "POST",
            "/manufacturers/",
            item).then(
            (response) => {
                console.log(response)
            }).catch(
            (error) => {
               console.log(error)
            }
        );
        // const config = {
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // };
        // try {
        //     await axios.post(
        //         "http://localhost:7777/manufacturers/",item,config).then((response) => {return response})
        // } catch (err) {
        // }
    }
    static async edit({item}){
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        try {
            const response = await axios.put(
                "http://localhost:7777/manufacturers/edit",item,config);
            console.log(response);
        } catch (err) {
            console.log(err);
        }
    }
}