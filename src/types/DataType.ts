export type ProductType = {
  category: string;
  description: string;
  id: number;
  image: string;
  rating: {
    count: number;
    rate: number;
  };
  title: string;
  price: number;
  quantity?: number;
};

export type StoreProduct = {
  id: number;
  quantity: number;
};
