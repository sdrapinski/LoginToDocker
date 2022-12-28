import React, { useState } from "react";
import axios from "axios";
// post localhost:8000/api/v1/users
/* {
    "email":"hihidam411@khaxan1.com",
  "password":"Szymon123@#XD"
 }
 response: 201 created brak body
 */
const CreateUser = () => {
  const [email, setemail] = useState("");

  const [password, setpassword] = useState("");
  const [info, setinfo] = useState("");

  const handleEmailChange = (e: React.FormEvent<HTMLInputElement>) => {
    setemail(e.currentTarget.value);
  };
  const handlePasswordChange = (e: React.FormEvent<HTMLInputElement>) => {
    setpassword(e.currentTarget.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    axios
      .post(
        `http://localhost:8000/api/v1/users`,
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
        setinfo("user created");
      })
      .catch((error) => {
        console.error(error);
        setinfo(error.response.data.email);
      });
  };
  return (
    <div>
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
      {info}
    </div>
  );
};

export default CreateUser;
