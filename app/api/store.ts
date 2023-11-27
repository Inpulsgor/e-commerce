const baseUrl = 'https://fakestoreapi.com';

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

export const getStoreProducts = async (): Promise<IProduct[]> => {
  const response = await fetch(`${baseUrl}/products`);

  if (response) return response?.json();

  return [];
};

export const getStoreProductById = async (
  id: string,
): Promise<IProduct | null> => {
  const response = await fetch(`${baseUrl}/products/${id}`);

  if (response) return response?.json();

  return null;
};
