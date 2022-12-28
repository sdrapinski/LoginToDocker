import axios from "axios";
import React,{useEffect} from "react";
import {useParams,useNavigate} from "react-router-dom"
import jwt from "jwt-decode"

/* 
to po mailu
post: localhost:8000/api/v1/users/activate_user
body:
{
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MiwiZXhwIjoxNjcyMTg5OTA5LCJpYXQiOjE2NzIxMDM1MDl9.zPMKIYYmBxkWeEem3O28pQ0ueOKEX1MZ9OC0Rko8pP4"
}
response: 200 ok brak body
*/
const ActivateUser = () => {
  const {token} = useParams();
  const navigate = useNavigate();
  const user = jwt(token!);
  console.log(user)
  useEffect(() => {
    axios
      .post(
        `http://localhost:8000/api/v1/users/activate_user`,
        {
          token:token,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response);
        console.log("ok");
       navigate('/loginuser/:Success');
      })
      .catch((error) => {
        console.log("nie ok");
        if(error.response.data.message === "User already active"){
          console.log("juz aktywowano")
          navigate('/loginuser/:AlreadyActivated');
        }else{
          console.error(error);
        }
        
       
      });
  
    return () => {
      
    }
  }, [])
  

  
  return <div>ActivateUser:
    <p>token: {token}</p>
  </div>;
};

export default ActivateUser;
