import axios from "axios";

import { Brands } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/brands`;

const getBrands = async (): Promise<Brands[]> => {
  try {
    const res = await axios.get(`${URL}`);

    return res.data;
  } catch (error) {
    throw new Error("Request failed.");
  }
};

export default getBrands;
