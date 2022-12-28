import React from 'react'
import {NavLink} from "react-router-dom"

const Home = () => {
  return (
    <div>
        <nav>
        <ul
            style={{
              display: "flex",
              gap: "20px",
              width: "90vw",
              listStyle: "none",
            }}
          >
            <li>
              <NavLink to="/">Home </NavLink>
            </li>
            <li>
              <NavLink to="/createuser">Create User </NavLink>
            </li>
            <li>
              <NavLink to="/loginuser">Login User </NavLink>
            </li>
            </ul>
        </nav>
        <hr />
        <h1>Dashboard</h1>
    </div>
  )
}

export default Home