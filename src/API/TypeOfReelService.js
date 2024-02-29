
import axios from "axios";

export default class TypeOfReelService{
    static async getAll(){
        const response = await axios.get(
            "http://localhost:7777/typeOfReels/").catch((err) => {
            console.log(err)
        })
        return response.data
    }
}