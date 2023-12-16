import getShoeDetails from "@/actions/get-shoe-details";

import { ShoeImages } from "./_components/shoe-images";
import { ShoeDetails } from "./_components/shoe-details";

const ShoeDetailsPage = async ({
  params,
}: {
  params: { slug: string; shoeId: string };
}) => {
  const details = await getShoeDetails(params.shoeId);

  return (
    <div className="px-4 sm:px-10 mt-28 md:mt-32">
      <section className="grid lg:grid-cols-3 md:gap-24">
        <article className="col-span-2">
          <ShoeImages images={details.images} />
        </article>
        <article className="col-span-1">
          <ShoeDetails data={details} />
        </article>
      </section>
    </div>
  );
};

export default ShoeDetailsPage;
