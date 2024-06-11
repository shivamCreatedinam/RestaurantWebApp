import React from "react";
import image from "../assets/logo.png";
function OpenPage() {
  return (
    <>

      <div>
        <div className="  flex justify-center items-center bg-[orange] h-screen py-[200px] rounded-2xl">

          <div>
            <img src={image} alt="about image" style={{ height: "100px", width: "302px" }} />
          </div>
        </div>


        <div className="flex justify-center">

          <div className="absolute bottom-0 py-14">
            <div className="rounded-lg w-[102px] h-[6px] bg-white">

            </div>
          </div>
        </div>


      </div>

    </>
  );
}

export default OpenPage;