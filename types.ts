export interface Brands {
  id: string;
  brand_name: string;
  brand_logo: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface Products {
  id: string;
  name: string;
  description: string;
  slug: string;
  brandId: string;
  categoryId: string;
  gender: string;
  stocks: number;
  price: number;
  discount: number;
  images: Image[];
  colorId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Image {
  id: string;
  image_path: string;
  productId: string;
  createdAt: Date;
  updatedAt: Date;
}