import React, { useEffect, useState } from "react";
import { ProductCard } from "../components/card/product-card";

export const Home = () => {
  const [Data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5000/products");
      const data = await response.json();
      // console.log(data);
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="grid grid-cols-3 place-items-center gap-y-5 mt-5">
        {Data.map((data, index) => {
          console.log(data);
          return (
            <ProductCard
              key={index}
              title={data.name}
              description={data.description}
            />
          );
        })}
      </div>
    </>
  );
};
