import axios from "axios";

import { Products } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/product`;

const getShoeDetails = async (
  shoeId: string
): Promise<Products> => {
  try {
    const res = await axios.get(`${URL}/${shoeId}`);

    return res.data;
  } catch (error) {
    throw error;
  }
};

export default getShoeDetails;
