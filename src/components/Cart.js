import { addDoc, collection, deleteField, doc, onSnapshot, query, serverTimestamp, updateDoc, where } from "firebase/firestore";
import { useState, useEffect } from "react";
import ShopingNavbar from "./ShopingNavbar";
import db from '../firebase'
import { UserAuth } from "../contexts/AuthContext";
import '../index.css'
import { Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const { user } = UserAuth();


  useEffect(() => {
    getData()
  }, [])

  const [data, setData] = useState();
  const getData = async () => {
    let email = localStorage.getItem("email")
    const docRef = query(collection(db, "users"), where("email", "==", email));
    onSnapshot(docRef, (snapshot) => {
      snapshot.docs.map(doc => {
        setData({
          ...doc.data(),
          id: doc.id
        })

      })
    })
  }

  const handelCheckOut = async () => {

    addDoc(collection(db, "checkout"), {
      name: data.name,
      time_of_checkout: serverTimestamp(),
      items: `₹ ${data.cart}`,
      price: data.cartvalue,
      totalPrice: `₹  ${data.cartvalue.reduce((a, b) => {
        return a + b
      })}`
    })

    const docRef = query(doc(db, "users", user.uid));
    await updateDoc(docRef, {
      cart: deleteField(),
      cartvalue: deleteField()
    });
  }

  return (
    <div className="container">
      <ShopingNavbar />
      <div className=" mt-5 pt-5">
        <div className="fs-1 text-center">Your Cart</div>
        <div className=" container">
          <div className="row justify-content-center">
            <div className=" col-8">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {data && data.cart.map((items, index) =>
                    <tr key={`${items}`}>
                      <th>{items}</th>
                      <th>{`₹ ${data && data.cartvalue[index]}`}</th>
                    </tr>
                  )}
                </tbody>
                <tfoot>
                  <tr key={1}>
                    <th>Total</th>
                    <th>₹ {data && data.cartvalue.reduce((a, b) => {
                      return Number(a + b)
                    })}</th>
                  </tr>
                </tfoot>
              </Table>
              <Link to={"/Shoppinghome"} className="btn btn-primary" onClick={handelCheckOut} >CheckOut</Link>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Cart;