import React from "react";
import { Button, Icon } from "rsuite";
import "./index.css";

const SaveButton = ({ handleBookSave }) => {
  return (
    <Button onClick={handleBookSave} color="green" className="float-right">
      <Icon icon="angle-double-down" />
    </Button>
  );
};

export default SaveButton;
