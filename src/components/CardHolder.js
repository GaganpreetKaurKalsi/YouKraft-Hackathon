import React from "react";
import { Card, Button } from "react-bootstrap";
import "./CardHolder.scss";

const CardHolder = ({ countries }) => {
  return (
    <>
      <div className="card-container">
        {countries.map((country) => {
          return (
            <Card>
              <Card.Img
                variant="top"
                src={`https://countryflagsapi.com/png/${country.toLowerCase()}`}
              />
              <Card.Body>
                <Card.Title>{country}</Card.Title>
                <Button href={`/${country.toLowerCase()}`}>Explore</Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default CardHolder;
