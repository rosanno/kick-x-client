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
      <section>
        <article>
          <ShoeImages images={details.images} />
        </article>
        <article>
          <ShoeDetails />
        </article>
      </section>
    </div>
  );
};

export default ShoeDetailsPage;
