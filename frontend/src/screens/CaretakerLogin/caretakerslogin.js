import React from "react";
import axios from "axios";



const baseUrl = 'http://192.168.1.6:8000/';

export const caretakerlogin= async data=>{

        try{      
            const response= await axios({
                method: 'post',
                url: baseUrl+'api/login',
                headers:{'Content-Type': 'application/json'},
                data,
                }).then(function (response) {
                    console.log(response.data)
                })
                
        } 
        catch(error){
            return error.response.data;
        };  
  
}
    




