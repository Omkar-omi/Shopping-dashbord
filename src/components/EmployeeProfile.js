import { useNavigate } from "react-router-dom";
import '../index.css'
import { collection, query, where, serverTimestamp, updateDoc, doc, onSnapshot } from "firebase/firestore";
import db from '../firebase'
import { UserAuth } from "../contexts/AuthContext";
import EditDetails1 from "./EditDetails1";
import { useEffect, useState } from "react";


const EmployeeProfile = () => {
  const { logout } = UserAuth();
  const [isCheckedin, setIsCheckedIn] = useState();
  const [isCheckedOut, setIsCheckedOut] = useState();
  const [data, setData] = useState({});
  const [userId, setUserId] = useState();


  const navigate = useNavigate();
  const handelLogout = async () => {
    try {
      await logout()
      navigate("/")
      alert(`${data.name} has logged out`)
    } catch (e) {
      console.log(e.message);
    }
  }

  const handelCheckIn = () => {
    setIsCheckedOut(false)
    setIsCheckedIn(true)
    const docRef = doc(db, 'employees', userId)
    updateDoc(docRef, {
      checkin: serverTimestamp(),
      isCheckedIn: true
    })
  }

  const handelCheckOut = () => {
    setIsCheckedIn(false)
    setIsCheckedOut(true)
    const docRef = doc(db, 'employees', userId)
    updateDoc(docRef, {
      checkout: serverTimestamp(),
      isCheckedIn: false
    })
  }

  useEffect(() => {
    const user = localStorage.getItem("email")
    if (user == null) {
      navigate("/")
    }
    getData()
  }, [])


  const getData = async () => {
    let email = localStorage.getItem("email")
    const docRef = query(collection(db, "employees"), where("email", "==", email));
    onSnapshot(docRef, (snapshot) => {
      snapshot.forEach((doc) => {
        const data = doc.data()
        setUserId(doc.id)
        setData(data)
        setIsCheckedIn(data.isCheckedIn)
        setIsCheckedOut(!data.isCheckedIn)
      })
    })
  }

  return (
    <div className=" container pt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 d-flex flex-column align-items-center p-3 border border-1 border-dark rounded">
          <div className="pe-5 ms-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" className="bi bi-person-circle" viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
            </svg>
          </div>
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
            <div className="d-flex flex-column flex-grow-1 mt-4 ms-3 gap-5 ">
              <EditDetails1 id={userId} name={data.name} email={data.email} phone={data.phno} dob={data.dob} add={data.address} />
            </div>
          </div>
          <div className="me-3">
            <button className='btn btn-primary d-flex align-items-center p-2 mt-2' onClick={handelLogout}>Log out</button>
          </div>
        </div>
      </div>
      <div className="row justify-content-center pt-1 ">
        <div className="col-md-8 d-flex justify-content-between border border-1 border-dark rounded p-3">
          {!isCheckedin && <button className="col-5 p-3 btn btn-success" id="check-in" onClick={handelCheckIn}>Check-In</button>}
          {isCheckedin && <button className="col-5 p-3 btn btn-success" id="check-in" onClick={handelCheckIn} disabled>Checked In</button>}
          {!isCheckedOut && <button className="col-5 p-3 btn btn-danger" id="check-out" onClick={handelCheckOut}>Check-out</button>}
          {isCheckedOut && <button className="col-5 p-3 btn btn-danger" id="check-out" onClick={handelCheckOut} disabled>Checked out</button>}
        </div>
      </div>
    </div >
  );
}

export default EmployeeProfile;