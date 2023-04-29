import React, { useState } from "react";
import "../styles/pop.css"
import { dataref } from "./firebase";

function Pop({ toggle, update, val }) {
    const [formData, setFormData] = useState({
        name: '',
        dob: '',
        email: '',
        mobile: ''
      });


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };

    const handleSubmit = async(event) => {
      if(update){
        const {name, dob, email, mobile} = formData
        const employeesRef = dataref.ref('employees');
        dataref.ref('employees').orderByChild('employeeID').equalTo(val).once('value', (snapshot) => {
          snapshot.forEach((childSnapshot) => {
            const key = childSnapshot.key;
            dataref.ref('employees').child(key).remove();
          });
        });
        employeesRef.child(val).update({
          employeeID: val,
          employeename: name,
          employeedob: dob,
          employeeemail: email,
          employeemobile: mobile
      });
      }
      else{
        event.preventDefault();
        const {name, dob, email, mobile} = formData
        const employeesRef = dataref.ref('employees');
        const currentId = 6600;
        const snapshot = await employeesRef.once('value');
        let id = currentId;
        snapshot.forEach((childSnapshot) => {
          const childData = childSnapshot.val();
          if (childData.employeeID >= id) {
            id = childData.employeeID + 1;
          }
        });
        const newEmployeeRef = employeesRef.push();
        const newEmployee = {
          employeeID: id,
          employeename: name,
          employeedob: dob,
          employeeemail: email,
          employeemobile: mobile
        };
        newEmployeeRef.set(newEmployee);
      }
        toggle()
      };

  return (
    <>
    <div className="popup">
        <div className="overlay" onClick={toggle}></div>
        <div className="form">
        <div className="header">
            <h3>Enter employee details</h3>
            <i className="fa fa-times" onClick={toggle}></i>
        </div>
        <form onSubmit={handleSubmit}>
            <div className="fields"> 
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} />
            </div>
            <div className="fields">
                <label htmlFor="dob">Date of Birth:</label>
                <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleInputChange} />
            </div>
            <div className="fields">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} />
            </div>
            <div className="fields">
                <label htmlFor="mobile">Mobile:</label>
                <input type="tel" id="mobile" name="mobile" value={formData.mobile} onChange={handleInputChange} />
            </div>
            <button type="submit" className="submit">submit</button>
            </form>
            </div>
    </div>
    </>
  )
}

export default Pop
