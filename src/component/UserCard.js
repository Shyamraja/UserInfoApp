import React, { useState } from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, Button, CardSubtitle
} from 'reactstrap';
import UserModal from "./UserModal";
import "./styles/card.css";


const UserCard = ({user}) => {
  const [showModal,setShowModal]=useState(false) 
  const toggle = () => setShowModal(!showModal)

  return (
 <div>

   <Card >
        <div className="img-container">
          <div className="img-text">
          {user.name.charAt(0)}
        </div>
      </div>
      <CardBody>     
        <CardTitle>{user.name}</CardTitle>
        <CardSubtitle>&#64;{user.username}</CardSubtitle>
      <CardText> <a href={`http://{user.website}`} target="_blank" rel="noreferrer"> http://{user.website}</a> </CardText>
        <Button onClick={toggle}>More Info</Button>
      </CardBody>
    </Card>
    <UserModal user={user} isOpen={showModal} toggle={toggle}/>

 </div>
 
  );
};

export default UserCard;