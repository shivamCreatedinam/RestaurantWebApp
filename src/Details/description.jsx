import React from "react";
import pic from "../assets/image 1.png"
import pics from "../assets/image 2.png"
function Description() {
    return(
        <>
        <div className="bg-slate-50 rounded-lg w-full h-full">

     <div className="flex py-4">
        <div className="ml-4">
            <img src = {pic} alt ="image"  style={{ height: "200px", width: "250px" }}  />
        </div>



        <div className="ml-2">
        <img src = {pics} alt ="pic"  style={{ height: "200px", width: "120px" }}  />
        </div>
     </div>

        <div>
         
         <p className="mx-4 text-[13.5px] text-slate-600 ">
            Welcome to ABC Pizzeria, your ultimate destination for an unforgettable pizza experience! We take pride in crafting
             exceptional pizzas that are sure to satisfy your cravings and delight your taste buds.
         </p>

         
         <p className="mt-4 mx-4 text-[13.5px] text-slate-600">
            At ABC Pizzeria, we specialize in handcrafted pizzas made with love and attention to detail.
             Our expert chefs use only the freshest, high-quality ingredients to create the perfect balance of flavors and textures. 
             Whether you prefer a classic Margherita, a loaded meat lover's delight, or a unique gourmet creation,
              our diverse menu offers something for everyone.
              </p>

         
         <p className="mt-4 mx-4 text-[13.5px] text-slate-600">
            We believe that great pizza starts with great ingredients. That's why we source locally whenever possible,
             ensuring that our toppings and sauces are made from the finest, farm- fresh produce and premium meats.
              With each bite,you'll taste the difference that our commitment to quality makes.
              </p>


        </div>

           
      


        </div>
        </>
    );
}


export default Description;