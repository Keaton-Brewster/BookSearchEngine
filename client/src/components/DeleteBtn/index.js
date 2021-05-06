import React from "react";
import { Button, Icon } from "rsuite";
import "./index.css";

const DeleteButton = ({ handleBookDelete }) => {
  return (
    <Button onClick={handleBookDelete} color="red" className="float-right">
      <Icon icon="trash" />
    </Button>
  );
};

export default DeleteButton;
