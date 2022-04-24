import React, { useState, useEffect } from "react";
import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Brand from "./pages/Brand";
import ErrorPage from "./pages/Errorpage";

export default function App() {
  const [data, setData] = useState([]);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(
      "https://s3-ap-southeast-1.amazonaws.com/he-public-data/TopRamen8d30951.json"
    )
      .then((res) => res.json())
      .then((dat) => {
        console.log(dat);
        setData(dat);
        let country = [];
        dat.forEach((ele) => {
          if (!country.includes(ele.Country)) {
            country = [...country, ele.Country];
          }
        });
        setCountries([...country, ...country, ...country]);
      });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage countries={countries} />} />
        <Route path="/:country" element={<Brand data={data} />} />
        <Route path="error" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
