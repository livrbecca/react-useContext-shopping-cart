// import shortcut, rafce - react arrow function component export

import React from "react";
import Tshirt from "./Tshirt";

const TshirtList = () => {
  const data = [
    {
      name: "Red Dragon T-shirt",
      price: 5.55,
      image:
        "https://cdn-img.prettylittlething.com/0/7/3/4/0734d67354f3a037e44dd33e082be65cbc14081a_cmk6617_1.jpg?imwidth=1024",
      id: 0,
    },
    {
      name: "Light Blue Hoodie",
      price: 26.99,
      image:
        "https://cdn-img.prettylittlething.com/7/5/5/e/755e86ce59fc50711d2bbb80783d4a34150c8615_clv4570_1.jpg?imwidth=1024",
      id: 1,
    },
    {
      name: "Orange Crop-top",
      price: 11.5,
      image:
        "https://cdn-img.prettylittlething.com/e/1/1/e/e11eb4dc6a203ec6750706c9a89a16793b686e02_cmr5496_1.jpg?imwidth=1024",
      id: 2,
    },
    {
      name: "Black Hoodie",
      price: 15.5,
      image:
        "https://cdn-img.prettylittlething.com/d/4/e/d/d4ede8a1b8903344f595a18858c16cab0fdd9f65_clt7383_1.jpg?imwidth=400",
      id: 3,
    },
    {
      name: "Orange World Hoodie",
      price: 22.9,
      image:
        "https://cdn-img.prettylittlething.com/9/0/5/6/90563fafa094937cc89c59cdefa34e65f6913b67_cmm2187_1.jpg?imwidth=1024",
      id: 4,
    },
    {
      name: "Brown T-shirt",
      price: 8.5,
      image:
        "https://cdn-img.prettylittlething.com/a/6/2/a/a62ad87ad2b6535da7270c3276d203e851da42ef_cmn7352_1.jpg?imwidth=1024",
      id: 5,
    },
    {
      name: "Khaki Oversize T-shirt",
      price: 11.5,
      image:
        "https://cdn-img.prettylittlething.com/a/b/a/6/aba6d45df81d4f2b4ec68a35a807505bf439b889_clv0457_1.jpg?imwidth=1024",
      id: 6,
    },
    {
      name: "Grey Butterfly T-shirt",
      price: 10.0,
      image:
        "https://cdn-img.prettylittlething.com/2/7/3/9/2739286acfe164c9f44274a34fff57b22f185570_cmq1543_1.jpg?imwidth=1024",
      id: 7,
    },
    {
      name: "White Crop T-shirt",
      price: 8.5,
      image:
        "https://cdn-img.prettylittlething.com/f/3/2/0/f3206e2d72a9a3e0764a7e2a5c22732443f45d5c_CLX0503_1.JPG?imwidth=1024",
      id: 8,
    },
  ];
  return (
    <>
      <div className="container">
        {data.map((item, key) => {
          return (
            <>
              <div className="card" >
                <Tshirt
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  id={item.id}
                />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default TshirtList;
