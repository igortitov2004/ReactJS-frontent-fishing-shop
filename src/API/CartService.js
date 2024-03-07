import {request} from "./axios_helper";

export default class CartService{
    static async getAll(){

        return  request(
            "GET",
            "/carts").then(
            (response) => {
                 // console.log(response.data)
                return response.data;

            }).catch(
            (error) => {
                console.log(error)
            }
        );

    }
}