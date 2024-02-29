import axios from "axios";

export default class ManufacturerService{
    static async getAll(){
        const response = await axios.get(
            "http://localhost:7777/manufacturers/").catch((err) => {
            console.log(err)
        })
        return response.data
    }
}