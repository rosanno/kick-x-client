import getBrands from "@/actions/get-brands";
import getPopularCollections from "@/actions/get-popular-collections";

import { Brands } from "@/components/brand";
import { Featured } from "@/components/featured";
import { PopularCollections } from "@/components/popular-collections";

export default async function Home() {
  const brands = await getBrands();
  const products = await getPopularCollections();

  return (
    <div className="px-4 sm:px-10 mt-10 md:mt-44">
      <Featured />
      <Brands brands={brands} />
      <PopularCollections products={products} />
    </div>
  );
}
