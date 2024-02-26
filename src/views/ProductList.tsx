import React from "react";
import P1 from "/public/P1.png";
import P2 from "/public/P2.png";
import P3 from "/public/P3.png";
import P4 from "/public/P4.png";
import P5 from "/public/P5.png";
import P6 from "/public/P6.png";
import P7 from "/public/P7.png";
import P8 from "/public/P8.png";
import P9 from "/public/P9.png";
import P10 from "/public/P10.png";
import P11 from "/public/P11.png";
import P12 from "/public/P12.jpg";
import P13 from "/public/P13.jpg";
import Image, { StaticImageData } from "next/image";
import ProductCard from "@/components/ui/ProductCard";
import { Products } from "@/utils/mock";
import { Button } from "@/components/ui/button";
function ProductList() {
  const productChunk = Products.slice(0, 3);

  return (
    <>
      <div className="m-10 grid grid-cols-3 gap-8 rounded-md">
        {productChunk.map((product) => (
          <ProductCard
            key={product.id}
            title={product.name}
            price={product.price}
            img={product.image as StaticImageData}
            category={product.category}
            id={product.id}
          />
        ))}

        {/* <ProductCard title="Brushed Raglan Sweatshirt" price={195} img={P1}/>
    <ProductCard title="Cameryn Sash Tie Dress" price={545} img={P2}/>
    <ProductCard title="Flex Sweatshirt" price={175} img={P3}/>
    <ProductCard title="Flex Sweatpants" price={175} img={P4}/>
    <ProductCard title="Pink Fleece Sweatpants" price={195} img={P5}/>
    <ProductCard title="Lite Sweatpants" price={150} img={P6}/>
    <ProductCard title="Imperial Alpaca Hoodie" price={525} img={P7}/>
    <ProductCard title="Muscle Tank" price={75} img={P8}/>
    <ProductCard title="Brushed Bomber" price={225} img={P9}/>
    <ProductCard title="Flex Push Button Bomber" price={225} img={P10}/>
    <ProductCard title="Raglan Sweatshirt" price={195} img={P11}/>
    <ProductCard title="Kiddy Red Frock" price={350} img={P12}/>
    <ProductCard title="Gilrs Skirt" price={425} img={P13}/> */}
      </div>
    </>
  );
}

export default ProductList;
