import {request} from "./axios_helper";

export default class RodCartService{
    static async create(rodCartRequest){
        request(
            "POST",
            "/rodsCarts/",
            rodCartRequest).then(
            (response) => {
                console.log(response)
            }).catch(
            (error) => {
                console.log(error)
            }
        );
    }

    static async delete(id){
        request(
            "DELETE",
            "/rodsCarts/"+id).then(
            (response) => {
                console.log(response)
            }).catch(
            (error) => {
                console.log(error)
            }
        );
    }
    static async increaseAmount(id){
        request(
            "PUT",
            "/rodsCarts/edit", {"id":id}).then(
            (response) => {
                console.log(response)
            }).catch(
            (error) => {
                console.log(error)
            }
        );
    }

}