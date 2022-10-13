import { arrayUnion, collection, doc, increment, onSnapshot, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import db from '../firebase'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../index.css'
import { UserAuth } from "../contexts/AuthContext";
import { Alert } from "react-bootstrap";

const ItemDetails = () => {
  const { user } = UserAuth();

  useEffect(() => {

    getData()
  }, [])

  const [qty, setQty] = useState();
  const [alert, setAlert] = useState(false);
  const [price, setPrice] = useState();
  const [invId, setInvId] = useState();


  const handelAddToCart = async (e) => {

    if (qty != 0) {
      const docRef = doc(db, "users", user.uid)
      updateDoc(docRef, {
        cart: arrayUnion(`Quantity:${qty} || Product:${e.target.value}`),
        cartvalue: arrayUnion(qty * price),
      })
      const docRef1 = doc(db, "inventory", invId)
      updateDoc(docRef1, {
        qtyleft: increment(-qty)
      })
    } else {
      setAlert(true)
      setTimeout(() => {
        setAlert(false)
      }, 5000)

    }
  }
  const [data, setData] = useState();
  const getData = async () => {
    onSnapshot(collection(db, "inventory"), (snapshot) => {
      setData(snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
      })))
    })
  }

  return (
    <div className="container mt-5">
      <Alert key="danger" variant="danger" show={alert} >
        Quantity cannot be zero
      </Alert>
      <div className="d-flex gap-5 flex-wrap">
        {data && data.map(items =>
          <Card style={{ width: '18rem' }} key={items.id}>
            <Card.Body>
              <Card.Title className="fs-4">{items.name}</Card.Title>
              <Card.Text className="text-muted">
                Description: {items.description}
              </Card.Text>
              <Card.Text className="text-danger" value={items.id}>
                Stock Left: {items.qtyleft}
              </Card.Text>
              <Card.Text className="text-success" id="price" value={items.price}>
                Price: ₹{items.price}
              </Card.Text>
            </Card.Body>
            <Card.Body className="d-flex justify-content-between">
              <input type="number" placeholder="Quantity" max={items.qtyleft} min="0" id="qty" className="me-2 shrink" onChange={(e) => {
                setQty(e.target.value)
                setPrice(items.price)
                setInvId(items.id)
              }} />
              <Button variant="primary" className="shrink" onClick={handelAddToCart} value={items.name} >Add To cart</Button>

            </Card.Body>
          </Card>
        )}
      </div>
    </div >
  );
}

export default ItemDetails;