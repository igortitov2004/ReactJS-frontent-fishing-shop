
import axios from "axios";

export default class TypeOfReelService{
    static async getAll(){
        const response = await axios.get(
            "http://localhost:7777/typeOfReels/").catch((err) => {
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
                "http://localhost:7777/typeOfReels/",item,config).then((response) => {return response})
        } catch (err) {
        }
    }
    static async edit({item}){
        console.log({item})
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        try {
            const response = await axios.put(
                "http://localhost:7777/typeOfReels/edit",item,config);
            console.log(response);
        } catch (err) {
            console.log(err);
        }
    }
}