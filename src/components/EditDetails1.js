import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import '../index.css'
import { doc, updateDoc, } from "firebase/firestore";
import db from '../firebase'


const EditDetails1 = (props) => {
  const { id, name, email, phone, add, dob } = props;
  const [showName, setShowName] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [showPhone, setShowPhone] = useState(false);
  const [showAddress, setShowAddress] = useState(false);
  const [showDob, setShowDob] = useState(false);
  const [value, setValue] = useState('');

  const handleClose = () => {
    setShowName(false)
    setShowEmail(false)
    setShowAddress(false)
    setShowDob(false)
    setShowPhone(false)
  }

  const handleEditName = () => setShowName(true);
  const editName = (e) => {
    e.preventDefault()
    const docRef = doc(db, 'employees', id)
    updateDoc(docRef, {
      name: value
    }).then(() => setValue(''))
    setShowName(false)
  }
  const handleEditDob = () => setShowDob(true);
  const editDob = (e) => {
    e.preventDefault()
    const docRef = doc(db, 'employees', id)
    updateDoc(docRef, {
      dob: value
    }).then(() => setValue(''))
    setShowDob(false)
  }
  const handleEditAddress = () => setShowAddress(true);
  const editAddress = (e) => {
    e.preventDefault()
    const docRef = doc(db, 'employees', id)
    updateDoc(docRef, {
      address: value
    }).then(() => setValue(''))
    setShowAddress(false)
  }
  const handleEditPhone = () => setShowPhone(true);
  const editPhone = (e) => {
    e.preventDefault()
    const docRef = doc(db, 'employees', id)
    updateDoc(docRef, {
      phno: value
    }).then(() => setValue(''))
    setShowPhone(false)
  }
  const handleEditEmail = () => setShowEmail(true);
  const editEmail = (e) => {
    e.preventDefault()
    const docRef = doc(db, 'employees', id)
    updateDoc(docRef, {
      email: value
    }).then(() => setValue(''))
    setShowEmail(false)
  }

  return (
    <div className="container">
      <div>
        <button className="btn btn-link d-flex align-items-center text-decoration-none p-0" onClick={handleEditName} > <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-pencil pe-1" viewBox="0 0 16 16">
          <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
        </svg> Edit</button>
        <button className="btn btn-link d-flex align-items-center text-decoration-none p-0 pt-1" onClick={handleEditDob}> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-pencil pe-1" viewBox="0 0 16 16">
          <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
        </svg> Edit</button>
        <button className="btn btn-link d-flex align-items-center text-decoration-none p-0 pt-1" onClick={handleEditAddress}> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-pencil pe-1" viewBox="0 0 16 16">
          <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
        </svg> Edit</button>
        <button className="btn btn-link d-flex align-items-center text-decoration-none p-0 pt-1" onClick={handleEditPhone}> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-pencil pe-1" viewBox="0 0 16 16">
          <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
        </svg> Edit</button>
        <button className="btn btn-link d-flex align-items-center text-decoration-none p-0 pt-1" onClick={handleEditEmail}> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-pencil pe-1" viewBox="0 0 16 16">
          <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
        </svg> Edit</button>
      </div>

      {/* Name Change */}
      <Modal show={showName} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Name</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Previous name:&nbsp;</Form.Label>
              <Form.Label>{name}</Form.Label>
              <Form.Control autoFocus
                value={value}
                autoComplete="off"
                onChange={(e) => setValue(e.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={editName}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Dob */}
      <Modal show={showDob} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Date Of Birth</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Previous Date of Birth:&nbsp;</Form.Label>
              <Form.Label>{dob}</Form.Label>
              <Form.Control
                type="date"
                placeholder="DD/MM/YYYY"
                autoFocus
                value={value}
                autoComplete="off"
                onChange={(e) => setValue(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={editDob}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Address */}
      <Modal show={showAddress} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Previous address:&nbsp;</Form.Label>
              <Form.Label>{add}</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                value={value}
                autoComplete="off"
                onChange={(e) => setValue(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={editAddress}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Phone no */}
      <Modal show={showPhone} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Phone No</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Previous Phone No:&nbsp;</Form.Label>
              <Form.Label>{phone}</Form.Label>
              <Form.Control
                type="text"
                placeholder="1234567890"
                autoFocus
                value={value}
                autoComplete="off"
                onChange={(e) => setValue(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={editPhone}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Email */}
      <Modal show={showEmail} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Email</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Previous Email:&nbsp;</Form.Label>
              <Form.Label>{email}</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                value={value}
                autoComplete="off"
                onChange={(e) => setValue(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={editEmail}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default EditDetails1;