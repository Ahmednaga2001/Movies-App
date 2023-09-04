import React from 'react';
import logo from "../images/logo.png"
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Header({search}) {
  const onSearch = (e)=>{
    search(e.target.value)
  }

  return (
    <header class="bg-dark py-3">
    <div class="container">
      <div class="row">
        <div class="col-md-2 brand">
          <Link to="/"
            ><img src={logo} class="w-100" alt="logo"
          /></Link>
        </div>{/*brand*/}
        <div class="col-md-10">
          <div class="input-group">
            <span class="input-group-text" id="basic-addon1"
              ><FaSearch/>
            </span>
            <input
              type="text"
              class="form-control"
              placeholder="اكتب اسم الفيلم او المسلسل هنا"
              onChange={onSearch}
              
            />
          </div>
        </div>
      </div>{/*row */}
      
    </div>{/*containe */}
    
  </header>
  )
}
