import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const pokemon = ({ id, type, image, name }) => {
  const style = type + " thumb-container rounded text-white";
  return (
    <Card
      className="my-3 p-3 rounded text-center shadow p-3 mb-5 bg-white rounded"
      style={{ border: "none" }}
    >
      <Link to={`/pokemon/${name}`}>
        <Card.Img style={{ width: "8rem" }} src={image} variant="top" />
      </Link>
      <Card.Body className={style}>
        <Link to={`/pokemon/${name}`} className="link-name">
          <Card.Title as="div">
            <strong>
              #{id} {name.charAt(0).toUpperCase() + name.slice(1)}
            </strong>
          </Card.Title>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default pokemon;
