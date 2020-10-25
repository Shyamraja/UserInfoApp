import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const UserModal = ({
  user,
  isOpen,
  toggle
}) => {
  return (
    <div> 
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>User Information</ModalHeader>
        <ModalBody>
          <div>
            <h2>Personal Information</h2>
            <p>name: {user.name}</p>
            <p>username: {user.username}</p>
            <p>email: {user.email}</p>
            <p>phone: {user.phone}</p>
            <p>company: {user.company.name}</p>
            <p>website: {user.website}</p>
            
          </div>

          <div>
            <h2>Address</h2>
            <ul>
            <li>Street Address: {user.address.street}</li>
            <li>Suite: {user.address.street}</li>
            <li>city: {user.address.city}</li>
            <li>zipcode: {user.address.zipcode}</li>
            </ul>
          </div>
            
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default UserModal;