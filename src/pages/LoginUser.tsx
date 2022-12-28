import axios from 'axios';
import React,{useState} from 'react'
import {useParams} from "react-router-dom"

/* 
post: localhost:8000/api/v1/token
{
   "email":"hihidam411@khaxan1.com",
   "password":"Szymon123@#XD"
}
response:
{
    "refresh": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MjI3OTU1NiwiaWF0IjoxNjcyMTkzMTU2LCJqdGkiOiIzMTU2OGM5MjdiY2Y0ZTIwODIwNzk1YjIyMGRhYTFjZCIsInVzZXJfaWQiOjJ9.Rb1nnYK_kavnawgbILgsBupHH2tGUCFjCTE8wg-wJac",
    "access": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjcyMTk0OTU2LCJpYXQiOjE2NzIxOTMxNTYsImp0aSI6ImYxMjUyYmNlNmI3ZjQwNDBhNjczOWE5MmZhZTMzYzhkIiwidXNlcl9pZCI6Mn0.KHOXIqwkZavASu2PzWSFZoXMlW_fStJqGPxZ8S5-3IQ"
}
*/

const LoginUser = () => {
    const {info} = useParams(); 
    const [email, setemail] = useState("");
    


  const [password, setpassword] = useState("");
    
const handleEmailChange = (e: React.FormEvent<HTMLInputElement>) => {
        setemail(e.currentTarget.value);
      };
const handlePasswordChange = (e: React.FormEvent<HTMLInputElement>) => {
        setpassword(e.currentTarget.value);
      };
const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    axios
      .post(
        `http://localhost:8000/api/v1/token`,
        {
          email: email,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      )
      .then((response) => {
        // data = response.data;
        console.log(response);
        console.log("ok");
        // appContext?.createUserAndRefreshToken(data);
        
      })
      .catch((error) => {
        console.error(error);
        
      });
}

  return (
    <div>LoginUser {info}
    <form action="#" onSubmit={handleSubmit} method="POST">
        <label>
          {" "}
          email
          <input type="email" value={email} onChange={handleEmailChange} />{" "}
        </label>{" "}
        <br />
        <label>
          {" "}
          haslo
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />{" "}
        </label>{" "}
        <br />
        <input type="submit" value="Wyslij" />
      </form>
    </div>
  )
}

export default LoginUser