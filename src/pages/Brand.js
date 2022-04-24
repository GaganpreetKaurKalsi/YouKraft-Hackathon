import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import "../components/CardHolder.scss";

const Brand = ({ data }) => {
  let { country } = useParams();
  const [brands, setBrands] = useState([]);
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetch(
      "https://s3-ap-southeast-1.amazonaws.com/he-public-data/noodlesec253ad.json"
    )
      .then((res) => res.json())
      .then((img) => {
        setImages(img);
      });
    let brandArray = [];
    data.forEach((ele) => {
      if (
        ele.Country.toLowerCase() === country.toLowerCase() &&
        !brandArray.includes(ele.Brand)
      ) {
        brandArray = [...brandArray, ele.Brand];
      }
    });
    setBrands(brandArray);
  }, [data]);
  return (
    <>
      <Navbar />
      <div className="card-container">
        {brands.map((brand) => {
          return (
            <Card>
              <Card.Img
                variant="top"
                src={images[Math.floor(Math.random() * images.length)].Image}
              />
              <Card.Body>
                <Card.Title>{brand}</Card.Title>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default Brand;
