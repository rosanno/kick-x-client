import axios from "axios";

import { Brands } from "./_components/brand";
import { Featured } from "./_components/featured";

async function getBrands() {
  try {
    const res = await axios.get(
      "http://localhost:3000/api/brands"
    );

    return res.data;
  } catch (error) {
    throw new Error("Request failed.");
  }
}

export default async function Home() {
  const brands = await getBrands();

  return (
    <div className="px-4 sm:px-10 mt-10 md:mt-28">
      <Featured />
      <Brands brands={brands} />
    </div>
  );
}
