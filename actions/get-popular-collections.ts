import axios from "axios";

import { Products } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/product`;

const getPopularCollections = async (): Promise<
  Products[]
> => {
  try {
    const res = await axios.get(`${URL}`);

    return res.data;
  } catch (error) {
    throw new Error("Request failed.");
  }
};

export default getPopularCollections;
