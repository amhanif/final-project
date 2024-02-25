import React from "react";
import Image from "next/image";
import { Facebook, Linkedin, Twitter, } from "lucide-react";
function Footer() {
  return (
    <footer>
      <div className="grid grid-cols-4 justify-center items-center mt-5">
        <div className="flex flex-col justify-center items-center">
          <div>
            <Image src={"/Logo.webp"} alt="Logo" width={150} height={106} />
          </div>
          <p className="ml-6 mt-5">
            Small, artisan label that offers a
            thoughtfully curated collection of
            high quality everyday essentials made.
          </p>
        <div className="flex gap-10 mt-2 mb-2">
        <div className="bg-slate-200 rounded-md p-2"><Twitter /></div>
        <div className="bg-slate-200 rounded-md p-2"><Facebook /></div>
        <div className="bg-slate-200 rounded-md p-2"><Linkedin /></div>
        </div>  
        </div>
        <div>
        <p className="text-2xl font-bold">Company</p>
        <p className="ml-6 mt-5 mb-10">
            Small, artisan label that offers a
            thoughtfully curated collection of
            high quality everyday essentials made.
        </p>
        </div>
        <div>
        <p className="text-2xl font-bold">Support</p>
        <p className="ml-6 mt-5 mb-10">
            Small, artisan label that offers a
            thoughtfully curated collection of
            high quality everyday essentials made.
        </p>
        </div>
        <div>
        <p className="text-2xl font-bold">Contact</p>
        <p className="ml-6 mt-5 mb-10">
            Small, artisan label that offers a
            thoughtfully curated collection of
            high quality everyday essentials made.
        </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
