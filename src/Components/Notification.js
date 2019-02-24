import React from "react";
import {Alert} from 'react-bootstrap'

const Notification = ({ message }) => {
  if (message === null || message === "") {
    return <div></div>;
  }
  return <Alert variant='primary'>{message}</Alert>
};

export default Notification;
