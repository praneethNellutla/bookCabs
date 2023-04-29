import React, { useState, useEffect } from "react";
import EmployeeRow from "./EmployeeRow";
import "../styles/EmployeeTable.css"
import Pop from "./Pop";
import firebase from './firebase'

function EmployeeTable() {

  const [show, setshow] = useState(true)

  function toggleshow(){
    setshow(!show)
  }

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const employeesRef = firebase.database().ref('employees');
    employeesRef.on('value', (snapshot) => {
      const employeesList = [];
      snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val();
        employeesList.push(childData);
      });
      setEmployees(employeesList);
    });
  }, []);


  return (
    <>
    <div className="add" onClick={toggleshow}>New employee</div>
    

    {show ? (
      <>
    <table>
      <thead>
        <tr>
          <th>Employee ID</th>
          <th>Employee Name</th>
          <th>Date of Birth</th>
          <th>Email Address</th>
          <th>Mobile Number</th>
          <th>Action</th>
        </tr>
      </thead>
        {/* map through employee data and render a row for each employee */}
        <tbody>
        {employees.map((employee) => (
          <EmployeeRow key={employee.employeeID} id={employee.employeeID} name={employee.employeename} dob={employee.employeedob} email={employee.employeeemail} mobile={employee.employeemobile}/>
        ))}
          
        </tbody>
    </table> 
    </>) : <Pop toggle={toggleshow} update={false}/>}
    </>
  );
}

export default EmployeeTable;