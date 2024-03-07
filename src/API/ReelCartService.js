import {request} from "./axios_helper";

export default class ReelCartService{
    static async create(reelCartRequest){
        request(
            "POST",
            "/reelsCarts/",
            reelCartRequest).then(
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
            "/reelsCarts/"+id).then(
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
            "/reelsCarts/edit",{"id":id}).then(
            (response) => {
                console.log(response)
            }).catch(
            (error) => {
                console.log(error)
            }
        );
    }

}