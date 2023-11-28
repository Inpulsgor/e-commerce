const baseUrl = process.env.NEXT_PUBLIC_STORE_API || 'https://fakestoreapi.com';

type Rating = {
  rate: number;
  count: number;
};

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

enum Categories {
  Electronics = 'electronics',
  Jewelery = 'jewelery',
  MensClothing = "men's clothing",
  WomensClothing = "women's clothing",
}

// GET products list
export const getStoreProducts = async (): Promise<IProduct[]> => {
  const response = await fetch(`${baseUrl}/products`);

  if (response) return response?.json();

  return [];
};

// GET single product by ID
export const getStoreProductById = async (
  id: string,
): Promise<IProduct | null> => {
  const response = await fetch(`${baseUrl}/products/${id}`);

  if (response) return response?.json();

  return null;
};

// product categories
export const getProductCategories = async (): Promise<Categories[]> => {
  const response = await fetch(`${baseUrl}/products/categories`);

  if (response) return response?.json();

  return [];
};
