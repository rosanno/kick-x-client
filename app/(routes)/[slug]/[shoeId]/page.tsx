import getShoeDetails from "@/actions/get-shoe-details";

const ShoeDetailsPage = async ({
  params,
}: {
  params: { slug: string; shoeId: string };
}) => {
  const details = await getShoeDetails(params.shoeId);

  return (
    <div className="px-4 sm:px-10 mt-10 md:mt-32">
      Shoe Details Pages
    </div>
  );
};

export default ShoeDetailsPage;
