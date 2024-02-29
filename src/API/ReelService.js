import axios from "axios";


export default class ReelsService{
    static async getAll(){
        const response = await axios.get(
            "http://localhost:7777/reels/").catch((err) => {
            console.log(err)
        })
        return response.data
    }

    static async create({reel}){

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        try {
            await axios.post(
                "http://localhost:7777/reels/",reel,config).then((response) => {return response})
        } catch (err) {

        }

    }
    static async edit({request}){
        console.log(request)
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        try {
            const response = await axios.put(
                "http://localhost:7777/reels/edit",request,config);
            console.log(response);
        } catch (err) {
            console.log(err);
        }
    }
    static async deleteById({id}){
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        try {
            const response = await axios.delete(
                "http://localhost:7777/reels/"+id,config);
            console.log(response);
        } catch (err) {
            console.log(err);
        }
    }

    static async getById({id}){
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        try {
            const response = await axios.get(
                "http://localhost:7777/reels/"+id,config);
            return response.data;
        } catch (err) {
            console.log(err);
        }
    }
}