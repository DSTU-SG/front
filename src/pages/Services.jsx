import React, { useEffect, useState } from "react";
import Navbar from "../components/UI/Navbar/Navbar";
import Pagination from "../components/UI/Pagination/Pagination";
import ServiceServ from "../API/ServiceServ";

const Services = () => {
 const [list, setList] = useState();


 useEffect(()=> {
const res = ServiceServ.GetService(localStorage.getItem('token'));
  console.log(res);
}, [])

 const changeList = (list) => {
  setList(list);
}
    return (
        <div>
          <Navbar/>
        <div className="service">
          <div className="service__list">
            <div className="service__list__name" >
            <Pagination
                page={list}
                changePage={changeList}
                totalPages={10}
            />
            </div>
            <div className="service__list__desc"></div>
          </div>
          <div  className="service__ad">
            <div  className="service__ad__1"></div>
            <div  className="service__ad__2"></div>
          </div>
        </div>
        </div>
    );
};

export default Services;