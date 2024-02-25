import Image from "next/image";
import Hero from "@/components/Hero";
import ProductList from "@/views/ProductList";
export default function Home() {
  return (
  <div className="min-h-screen mt-10">
  <Hero/>
  <ProductList/>
  </div>
  )
}
