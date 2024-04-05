import React from "react";
import "./EceDepartmentStyles.css";
import { useState,useEffect } from "react";
import DataTable from 'react-data-table-component'
const MpmcLab = () => {
  const [data,setData] = useState([])
  const DATA_URL = "http://localhost:8000/LabData"
  useEffect( () =>{
    const Datafetch = async () =>{
      try{
        const responce = await fetch(DATA_URL)
        const fetchedData = await responce.json()
        setData(fetchedData)
        
      }
      catch(error){
        console.log(error.message)
      }

    }
   Datafetch();
  },[])
  console.log(data)
  const columns = [
    {
      name: 'S.No',
      selector: (data) => data.id  
    },
    {
      name :'COMPONENT',
      selector : (data) =>data.component
    },
    {
      name : "MANUFACTURING YEAR",
      selector : (data) =>data.manufacturer_year,
      sortable: true   
    },
    {
      name : "BOUGHT YEAR",
      selector : (data) =>data.bought_year,
      sortable: true  
    },
    {
      name : "WORKING CONDITION",
      selector : (data) =>data.working_condition,
      sortable: true   
    },
  ]
  const handleSearch =(event)=>{
    const newItems = data.filter((item)=>
      item.component.toLowerCase().includes(event.target.value.toLowerCase()))
      setData(newItems)
    
  }
  return (
    <>
    <div className="labTop-container">
    <div className="dep-heading">
        <h1>Microprocessor and Microcontroller Laboratory</h1>
      </div>
        <p>
          The Microprocessor and Microcontroller Laboratory provides students
          with hands-on experience in understanding the architecture,
          programming, and interfacing of microprocessors and microcontrollers.
          It aims to bridge the gap between theoretical knowledge and practical
          implementation, enabling students to design and develop real-world
          applications using embedded systems.
        </p>
    </div>
    <div className="talbeHeading">
         <h3>List of Components And Its Working Condition :</h3>
         <div className="labSearch">
      <input type="text" placeholder="Search Items" onChange={handleSearch}/>
    </div>
    </div>
    <div className="mpmcTable">
      <DataTable
      columns={columns}
      data ={data}
      pagination
      highlightOnHover
      striped
      selectableRows
      responsive
      />
    </div>
    </>
  );
};
export default MpmcLab;
