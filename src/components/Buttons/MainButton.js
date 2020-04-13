import React from "react";

// reactstrap components
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

function MainButton(props) {
  return (
    <Button tag={Link} to={props.link} color="primary" block size="lg" className="btn btn-primary mainButton">
        {props.text}
    </Button>
  );
}

export default MainButton;
