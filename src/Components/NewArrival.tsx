import React from 'react';
import { Product } from "@/types/product.types";

export const newArrivalsData: Product[] = [
  {
    id: 1,
    title: "T-SHIRT WITH TAPE DETAILS",
    srcUrl: "/images/img1.png", 
    gallery: ["/images/img1.png"],
    price: 120,
    discount: { amount: 0, percentage: 30 },
    rating: 3.5,
  },
  {
    id: 2,
    title: "Skinny Fit Jeans",
    srcUrl: "/images/img2.png", 
    gallery: ["/images/img2.png"],
    price: 260,
    discount: { amount: 0, percentage: 30 },
    rating: 3.5,
  },
  {
    id: 3,
    title: "Chequered Shirt",
    srcUrl: "/images/img3.png",
    gallery: ["/images/img3.png"],
    price: 180,
    discount: { amount: 0, percentage: 0 },
    rating: 4.5,
  },
  {
    id: 4,
    title: "Sleeve Striped T-shirt",
    srcUrl: "/images/img10.png", 
    gallery: ["/images/img10.png", "/images/pic10.png", "/images/pic11.png"],
    price: 160,
    discount: { amount: 0, percentage: 30 },
    rating: 4.5,
  },
];

const NewArrival = () => {
  return (
    <div className="max-w-[1240px] mx-auto h-auto mt-[72px]">
      <h1 className="text-[48px] font-bold uppercase text-center mb-[55px]">New arrivals</h1>
      <div className="flex gap-5">
     
        {newArrivalsData.map((product) => (
          <div key={product.id} className="flex flex-col items-center">
            <img
              src={product.srcUrl}
              alt={product.title}
              className="w-[250px] h-[250px] object-cover mb-[16px]"
            />
            <h3 className="text-[18px] font-semibold">{product.title}</h3>
            <p className="text-[16px]">${product.price}</p>
            <p className="text-[14px] text-gray-600">
              {product.discount.percentage > 0 ? `-${product.discount.percentage}%` : "No Discount"}
            </p>
            <p className="text-[14px]">Rating: {product.rating} ⭐</p>
          </div>
        ))}
      </div>
      <button className="w-[218px] h-[52px] rounded-[62px] border border-[rgba(0,0,0,0.3)] text-[16px] font-medium flex items-center justify-center mt-[36px] mx-auto">
        View All
      </button>
    </div>
  );
};

export default NewArrival;
