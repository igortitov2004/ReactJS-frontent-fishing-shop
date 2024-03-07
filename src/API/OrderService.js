import {request} from "./axios_helper";

export default class OrderService{
    static async getAll(){
        return  request(
            "GET",
            "/orders/").then(
            (response) => {
                 return response.data
            }).catch(
            (error) => {
                console.log(error)
            }
        );
    }

    static async delete(id){
        return  request(
            "DELETE",
            "/orders/"+id).then(
            (response) => {
                return response.data
            }).catch(
            (error) => {
                console.log(error)
            }
        );
    }

    static async create(orderRequest){
        return  request(
            "PUT",
            "/orders/",orderRequest).then(
            (response) => {

            }).catch(
            (error) => {
                console.log(error)
            }
        );
    }
}