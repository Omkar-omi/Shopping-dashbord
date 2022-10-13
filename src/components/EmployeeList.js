import { collection, onSnapshot } from "firebase/firestore";
import db from '../firebase'
import { useEffect, useState } from "react";
import MoreDetails from "./MoreDetails";


const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    getData()
  }, []);

  const getData = async () => {
    onSnapshot(collection(db, "employees"), (snapshot) => {
      setEmployees(snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
      })))
    })
  }

  return (
    <div className="col-md-8 col-12 border border-1 border-dark rounded text-center mt-2">
      <div className="d-flex flex-column ">
        <div className="d-flex flex-column text-start ">
          <h2 className="mt-2 mb-0">Employees list</h2>
          <hr />
          {employees.map(emp =>
            <div key={emp.id}>
              <div>Name: {emp.name}</div>
              <div>Address: {emp.address}</div>
              <div>Email: {emp.email}</div>
              <div>Phoneno: {emp.phoneno}</div>
              <MoreDetails checkin={(emp.checkin).toDate().toString()} checkout={(emp.checkout).toDate().toString()} id={emp.id} name={emp.name} isCheckedIn={emp.isCheckedIn} />
              <hr />
            </div>
          )}
        </div>
      </div >
    </div >
  )

}

export default EmployeeList;

