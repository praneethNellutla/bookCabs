import React, { useState } from "react";
import Pop from "./Pop";
import firebase from './firebase';
import "../styles/EmployeeRow.css"

function EmployeeRow({ id, name, dob, email, mobile }) {
  const [appear, setappear] = useState(true)
  const showpopup = () => {
    setappear(!appear)
  }

function deleteEmployee(e) {
  const database = firebase.database();
  database.ref('employees').orderByChild('employeeID').equalTo(e).once('value', (snapshot) => {
    snapshot.forEach((childSnapshot) => {
      const key = childSnapshot.key;
      database.ref('employees').child(key).remove();
    });
  });
}
  return (
    <>
    {appear ? (
      <>
      <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{dob}</td>
      <td>{email}</td>
      <td>{mobile}</td>
      <td >
        <div className="actions">
          <i className="edit fa fa-pencil-square-o" onClick={showpopup}></i>
          <i className="delete fa fa-trash-o" onClick={()=> deleteEmployee(id)}></i>
        </div>
      </td>
    </tr>
    </>
    ) : (<Pop toggle={setappear} update={true} val={id}/>)}
  </>
  );
}

export default EmployeeRow;