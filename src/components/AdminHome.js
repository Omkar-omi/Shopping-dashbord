import { useNavigate } from "react-router-dom";
import '../index.css'
import { collection, query, where, onSnapshot } from "firebase/firestore";
import db from '../firebase'
import { UserAuth } from "../contexts/AuthContext";
import EditDetails1 from "./EditDetails1";
import { useEffect, useState } from "react";
import EmployeeList from "./EmployeeList";
const AdminHome = () => {

  const { logout } = UserAuth();
  const [data, setData] = useState({});
  const [userId, setUserId] = useState();


  const navigate = useNavigate();
  const handelLogout = async () => {
    try {
      await logout()
      navigate("/adminlogin")
      alert(`${data.name} has logged out`)
    } catch (e) {
      console.log(e.message);
    }
  }

  useEffect(() => {
    const user = localStorage.getItem("email")
    if (user == null) {
      navigate("/adminlogin")
    }
    getData()
  }, [])


  const getData = async () => {
    let email = localStorage.getItem("email")
    const docRef = query(collection(db, "admin"), where("email", "==", email));
    onSnapshot(docRef, (snapshot) => {
      snapshot.forEach((doc) => {
        const data = doc.data()
        setUserId(doc.id)
        setData(data)
      })
    })
  }
  return (
    <div className="container pt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-12 d-flex flex-column flex-lg-row justify-content-center align-items-center p-3 border border-1 border-dark rounded">
          <div className="pe-5 pe-1 ms-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" className="bi bi-person-circle" viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
            </svg>
          </div>
          <div className="d-flex flex-md-column">
            <div className="d-flex">
              <div className="d-flex flex-column flex-shrink-1 mt-4 text-end text-nowrap">
                <div className="font-size">Name: </div>
                <div className="font-size">Date of Birth: </div>
                <div className="font-size">Address: </div>
                <div className="font-size">Phone No: </div>
                <div className="font-size">Email: </div>
              </div>
              <div className="d-flex flex-column flex-shrink-1 mt-4 ms-2">
                <div className="font-size">{data.name}</div>
                <div className="font-size">{data.dob}</div>
                <div className="font-size">{data.address}</div>
                <div className="font-size">{data.phoneno}</div>
                <div className="font-size">{data.email}</div>
              </div>
              <div className="d-flex flex-column flex-grow-1 mt-4 ms-lg-3 gap-5 ">
                <EditDetails1 id={userId} name={data.name} email={data.email} phone={data.phno} dob={data.dob} add={data.address} />
              </div>
            </div>
          </div>
          <div className="me-3">
            <button className='btn btn-primary d-flex align-items-center p-2 mt-2' onClick={handelLogout}>Log out</button>
          </div>
        </div>
        <EmployeeList />
      </div>
    </div >
  );
}
export default AdminHome;