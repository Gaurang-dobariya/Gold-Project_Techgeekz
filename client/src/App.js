import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {

  const [data, setData] = useState([]);
  const [gram, setGram] = useState({});


  async function getData() {
    try {
      const res = await axios.get("http://localhost:5001/v1/gold/get");
      setData(res.data.data);

      const gramData = res.data.data.reduce((acc, item) => {
        acc[item._id] = 1.94;
        return acc;
      }, {});

      setGram(gramData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }


  const handleChange = (dataId, value) => {
    setGram((prev) => ({
      ...prev,
      [dataId]: parseInt(value),
    }));
  };


  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {data.map((val) => (
        <div key={val._id}>
          <h3>Name : {val.Title}</h3>
          <h3>Purity : {val.Option2_Value}</h3>

          <select onChange={(e) => handleChange(val._id, e.target.value)}
            value={gram[val._id]} >
            <option value={1.94} selected>1.94 G</option>
            <option value={2.88}>2.88 G</option>
            <option value={5.36}>5.36 G</option>
            <option value={2.72}>2.72 G</option>
          </select>

          <div>Gold Price: {Number((val.Gold_Price * gram[val._id]).toFixed(2))}</div>
          <div>Making Price: {val.Making_Price}</div>
          <div>Diamond Price: {val.Diamond_Price}</div>

          <div>
            Total:{" "}
            {Number(
              (
                val.Gold_Price * gram[val._id] +
                val.Making_Price +
                val.Diamond_Price
              ).toFixed(2)
            )}
          </div>
        </div>
      ))}
    </>
  );
}

export default App;
