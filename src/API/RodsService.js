import axios from "axios";

export default class RodsService{
    static async getAll(){
        const response = await axios.get(
            "http://localhost:7777/rods/").catch((err) => {
            console.log(err)
        })
        return response.data
    }
    static async create({rod}){
        console.log(rod)
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        try {
            const response = await axios.post(
                "http://localhost:7777/rods/",rod,config);
            console.log(response);
        } catch (err) {
            console.log(err);
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
                "http://localhost:7777/rods/edit",request,config);
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
                "http://localhost:7777/rods/"+id,config);
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
                "http://localhost:7777/rods/"+id,config);
            return response.data;
        } catch (err) {
            console.log(err);
        }
    }
}