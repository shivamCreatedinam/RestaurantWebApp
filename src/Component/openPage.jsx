import React from "react";
import image from "../assets/logo.png";
function OpenPage() {
  return (
    <>
      <div className="flex justify-centre item-centre bg-black py-[200px] h-screen">

        <div>
          <img src={image} alt=""  />
        </div>

      </div>
    </>
  );
}

export default OpenPage;