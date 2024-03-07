import React from 'react';
import {request} from "./axios_helper";

export default class UserService{
    static async changePassword({passRequest}){

        request(
            "PATCH",
            "/users",
            passRequest).then(
            (response) => {
                console.log(response)
            }).catch(
            (error) => {
                console.log(error)
            }
        );
    }
}