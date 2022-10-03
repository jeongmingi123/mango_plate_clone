import React from "react";
import tw from "tailwind-styled-components";

interface IFoodItem {
  url: string;
}

const Img = tw.img`
  w-96
  h-64
  rounded-md

`;

const FoodItem = ({ url }: IFoodItem) => {
  return (
    <>
      <Img src={url} />
    </>
  );
};
export default FoodItem;
