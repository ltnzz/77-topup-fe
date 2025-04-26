import React from "react";

export const ProductDetail = () => {
  return (
    <div className="grid grid-cols-3 gap-5 h-screen p-10">
      <figure className="flex items-center">
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="flex flex-col justify-center ">
        <h2>Sepatu</h2>
        <h2>Rp 150.000</h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
      </div>
      <div className="flex flex-col gap-4 justify-center">
        <h1 className="text-2xl font-bold">Sub Total : Rp 150.000</h1>
        <button className="btn btn-primary">Buy Now</button>
        <button className="btn btn-outline btn-primary">Add to Cart</button>
      </div>
    </div>
  );
};
