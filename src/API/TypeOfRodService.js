
import axios from "axios";

export default class TypeOfRodService{
    static async getAll(){
        const response = await axios.get(
            "http://localhost:7777/typesOfRods/").catch((err) => {
            console.log(err)
        })
        return response.data
    }
    static async create({item}){
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        try {
            await axios.post(
                "http://localhost:7777/typesOfRods/",item,config).then((response) => {return response})
        } catch (err) {
        }
    }
    static async edit({item}){
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        try {
            const response = await axios.put(
                "http://localhost:7777/typesOfRods/edit",item,config);
            console.log(response);
        } catch (err) {
            console.log(err);
        }
    }
}