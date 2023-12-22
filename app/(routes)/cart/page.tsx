import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { authOptions } from "@/lib/auth";

const CartPage = async () => {
  const sessions = await getServerSession(authOptions);

  if (!sessions) {
    return redirect("/sign-in");
  }

  return <div>Cart Page</div>;
};

export default CartPage;
