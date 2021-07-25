import React from "react"
import { CommonContent } from "./CommonContent";
export const HeroBanner = (props) => {
  const { bgImageUrl, ...rest } = props;
  return (
    <>
      <div
        style={{
          backgroundPosition: "bottom center",
          backgroundSize: "cover",
          backgroundImage: `url(${
            bgImageUrl
              ? bgImageUrl
              : "https://www.yardly.ca/wp-content/uploads/2020/01/Home_Header.svg"
          })`,
          backgroundRepeat: "no-repeat",
          width: "100%",
          minHeight: "650px",
        }}
      >
        {props.children ? props.children : <CommonContent {...rest} />}
      </div>
    </>
  );
};
